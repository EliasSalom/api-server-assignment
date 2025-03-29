import { Module } from '@nestjs/common';
import { ProdactService } from './prodact.service';
import { ProdactController } from './prodact.controller';

@Module({
  controllers: [ProdactController],
  providers: [ProdactService],
})
export class ProdactModule {}
