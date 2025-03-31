import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CreateCartDto } from './dto/create-cart.dto';
import { JwtAuthGuard } from '../jwt-auth.guard';

@ApiTags('Cart')
@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Post()
  addProductToCart(@Body() data: CreateCartDto) {
    const { productId, userId } = data;
    return this.cartService.addProduct(productId, userId);
  }

  @Patch(':id')
  changeProductAmountInCart(@Body() data: UpdateCartDto) {
    return this.cartService.changeProductAmount(data);
  }

  @Delete(':id')
  deleteProductFromCart(@Param('id') id: string) {
    return this.cartService.deleteProduct(id);
  }
}
