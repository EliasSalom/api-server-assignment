import { Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Post()
  addProductToCart() {
    console.log('addProductToCart');
  }

  @Patch(':id')
  changeProductAmountInCart(@Param('id') id: string) {
    console.log(id);
  }

  @Delete(':id')
  deleteProductFromCart(@Param('id') id: string) {
    console.log(id);
  }
}
