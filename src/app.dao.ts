import { Get, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppDao {
  constructor(private readonly prismaClient: PrismaClient) {}
  @Get()
  healthCheck() {
    return 'OK';
  }
}
