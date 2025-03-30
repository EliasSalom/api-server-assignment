import { Injectable } from '@nestjs/common';
import { CreateProdactDto } from './dto/create-prodact.dto';
import { UpdateProdactDto } from './dto/update-prodact.dto';

@Injectable()
export class ProductService {
  create(createProdactDto: CreateProdactDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all prodact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prodact`;
  }

  update(id: number, updateProdactDto: UpdateProdactDto) {
    return `This action updates a #${id} prodact`;
  }

  remove(id: number) {
    return `This action removes a #${id} prodact`;
  }
}
