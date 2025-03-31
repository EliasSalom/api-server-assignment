import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ICreateProduct } from './type/product.type';

@Injectable()
export class ProductDao {
  constructor(private readonly prismaClient: PrismaClient) {}
  getCategories() {
    return this.prismaClient.category.findMany();
  }
  getProducts(id: string) {
    return this.prismaClient.product.findMany({
      where: {
        categoryId: id,
      },
    });
  }
  createCategory(name: string) {
    return this.prismaClient.category.create({
      data: {
        name,
      },
    });
  }
  createProduct(data: ICreateProduct) {
    return this.prismaClient.product.create({
      data,
    });
  }
}
