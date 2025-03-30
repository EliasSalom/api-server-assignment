export interface IAddToCart {
  cartId: string;
  userId: string;
  amount: number;
  action: TAddToCart;
}
type TAddToCart = 'increment' | 'decrement';
