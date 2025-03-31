import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
export class CreateCategoryDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  name: string;
}
