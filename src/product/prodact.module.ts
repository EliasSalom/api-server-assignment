import { Module } from '@nestjs/common';
import { ProductService } from './prodact.service';
import { ProductController } from './prodact.controller';
import { ProductDao } from './product.dao';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductDao],
})
export class ProductModule {}
