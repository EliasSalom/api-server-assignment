import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

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
}
