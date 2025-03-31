import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class UpdateCartDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  action: 'increment' | 'decrement';

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
