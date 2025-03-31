import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './prodact.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwt-auth.guard';

@ApiTags('product')
@Controller('product')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':id')
  getProducts(@Param('id') id: string) {
    return this.productService.getProducts(id);
  }

  @Get('categories')
  getCategories() {
    return this.productService.getAllCategories();
  }

  @Post('categories')
  createCategory(name: string) {
    return this.productService.createCategory(name);
  }
}
