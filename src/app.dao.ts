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
    return this.prismaClient.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, 10),
      },
    });
  }
  async findUserByEmail(email: string) {
    return this.prismaClient.user.findUnique({
      where: { email },
    });
  }
  async validateUser(email: string, password: string) {
    const user = await this.findUserByEmail(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { id: user.id, username: user.email };
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    const payload = { sub: user.id, username: user.username };
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }
}
