import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './prodact.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { CreateCategoryDto, CreateProductDto } from './dto/create-prodact.dto';

@ApiTags('product')
@Controller('product')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/categories')
  getCategories() {
    return this.productService.getAllCategories();
  }

  @Get(':id')
  getProducts(@Param('id') id: string) {
    console.log('getCategories');
    return this.productService.getProducts(id);
  }

  @Post('categories')
  createCategory(@Body() data: CreateCategoryDto) {
    const { name } = data;
    return this.productService.createCategory(name);
  }

  @Post()
  createProduct(@Body() data: CreateProductDto) {
    return this.productService.createProduct(data);
  }
}
