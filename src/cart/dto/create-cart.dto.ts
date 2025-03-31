import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  productId: string;
  @ApiProperty({
    type: String,
  })
  @IsString()
  userId: string;
}
