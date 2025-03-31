import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './prodact.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
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
