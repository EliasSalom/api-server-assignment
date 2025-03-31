import { Injectable } from '@nestjs/common';
import { ProductDao } from './product.dao';

@Injectable()
export class ProductService {
  constructor(private readonly productDao: ProductDao) {}
  getAllCategories() {
    return this.productDao.getCategories();
  }
  getProducts(id: string) {
    return this.productDao.getProducts(id);
  }
  createCategory(name: string) {
    return this.productDao.createCategory(name);
  }
}
