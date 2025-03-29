import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdactService } from './prodact.service';
import { CreateProdactDto } from './dto/create-prodact.dto';
import { UpdateProdactDto } from './dto/update-prodact.dto';

@Controller('prodact')
export class ProdactController {
  constructor(private readonly prodactService: ProdactService) {}

  @Post()
  create(@Body() createProdactDto: CreateProdactDto) {
    return this.prodactService.create(createProdactDto);
  }

  @Get()
  findAll() {
    return this.prodactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdactDto: UpdateProdactDto) {
    return this.prodactService.update(+id, updateProdactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodactService.remove(+id);
  }
}
