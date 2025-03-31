import { Injectable } from '@nestjs/common';
import { CartDao } from './cart.dao';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(private readonly cartDao: CartDao) {}
  addProduct(productId: string, userId: string) {
    return this.cartDao.addProductToCart(productId, userId);
  }
  changeProductAmount(data: UpdateCartDto) {
    return this.cartDao.changeProductAmountInCart(data);
  }
  deleteProduct(cartId: string) {
    return this.cartDao.deleteProductFromCart(cartId);
  }
}
