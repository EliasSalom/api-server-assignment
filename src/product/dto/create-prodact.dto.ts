import { IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsUUID()
  categoryId: string;
}
export class CreateCategoryDto {
  @IsString()
  name: string;
}
