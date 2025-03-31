import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCartDto {
  @ApiProperty({
    type: String,
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  action: 'increment' | 'decrement';

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
