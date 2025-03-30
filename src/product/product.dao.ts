import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductDao {
  constructor(private readonly prismaClient: PrismaClient) {}
}
