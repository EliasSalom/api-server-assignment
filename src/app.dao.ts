import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AppDao {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly jwtService: JwtService,
  ) {}
  signUp(email: string, password: string) {
    return this.prismaClient.$transaction(async (tx) => {
      const user = await tx.user.findUnique({ where: { email } });
      if (user) {
        throw new UnauthorizedException('User already exists');
      }
      const userRecord = await tx.user.create({
        data: {
          email,
          password: bcrypt.hashSync(password, 10),
        },
        select: { id: true, email: true, createdAt: true },
      });

      const cart = await tx.cart.create({
        data: {
          userId: userRecord.id,
        },
      });

      return { user: userRecord, cart };
    });
  }
  async findUserByEmail(email: string) {
    return this.prismaClient.user.findUnique({
      where: { email },
      include: { cart: true },
    });
  }
  async validateUser(email: string, password: string) {
    const user = await this.findUserByEmail(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { id: user.id, email: user.email, cart: user.cart };
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    const token = this.jwtService.sign({ email: user.email, id: user.id });
    return { user, token };
  }
  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });
  }
}
