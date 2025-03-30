import { Injectable } from '@nestjs/common';
import { CartDao } from './cart.dao';
import { IAddToCart } from './type/cart';

@Injectable()
export class CartService {
  constructor(private readonly cartDao: CartDao) {}
  addProduct(productId: string, userId: string) {
    return this.cartDao.addProductToCart(productId, userId);
  }
  changeProduct(data: IAddToCart) {
    return this.cartDao.changeProductAmountInCart(data);
  }
  deleteProduct(cartId: string) {
    return this.cartDao.deleteProductFromCart(cartId);
  }
}
