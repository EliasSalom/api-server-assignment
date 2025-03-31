import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-prodact.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
