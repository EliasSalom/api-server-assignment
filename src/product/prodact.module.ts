import { Module } from '@nestjs/common';
import { ProductService } from './prodact.service';
import { ProductController } from './prodact.controller';
import { ProductDao } from './product.dao';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductDao, PrismaClient],
})
export class ProductModule {}
