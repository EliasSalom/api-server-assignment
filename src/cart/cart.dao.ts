import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartDao {
  constructor(private readonly prismaClient: PrismaClient) {}

  addProductToCart(productId: string, userId: string) {
    return this.prismaClient.$transaction(async (tx) => {
      let cart = await tx.cart.findUnique({ where: { id: userId } });
      if (!cart) {
        cart = await tx.cart.create({
          data: {
            userId: userId,
          },
        });
      }
      return tx.cartItem.create({
        data: {
          cartId: cart.id,
          productId: productId,
          quantity: 1,
        },
      });
    });
  }
  changeProductAmountInCart(data: UpdateCartDto) {
    const { id, action, amount } = data;
    return this.prismaClient.$transaction(async (tx) => {
      const cartItem = await tx.cartItem.findUnique({
        where: { id },
      });
      if (cartItem) {
        return tx.cartItem.update({
          where: { id: cartItem?.id },
          data: {
            quantity: {
              [action === 'increment' ? 'increment' : 'decrement']: amount,
            },
          },
        });
      } else throw new UnauthorizedException('item not found');
    });
  }
  deleteProductFromCart(cartId: string) {
    return this.prismaClient.$transaction(async (tx) => {
      const cartItem = await tx.cartItem.findUnique({
        where: { id: cartId },
      });
      if (cartItem)
        return tx.cartItem.delete({
          where: { id: cartItem.id },
        });
    });
  }
}
