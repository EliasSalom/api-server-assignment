import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartDao } from './cart.dao';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CartController],
  providers: [CartService, CartDao, PrismaClient],
})
export class CartModule {}
