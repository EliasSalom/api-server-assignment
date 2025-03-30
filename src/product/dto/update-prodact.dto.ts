import { PartialType } from '@nestjs/swagger';
import { CreateProdactDto } from './create-prodact.dto';

export class UpdateProdactDto extends PartialType(CreateProdactDto) {}
