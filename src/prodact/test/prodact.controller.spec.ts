import { Test, TestingModule } from '@nestjs/testing';
import { ProdactController } from '../prodact.controller';
import { ProdactService } from '../prodact.service';

describe('ProdactController', () => {
  let controller: ProdactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdactController],
      providers: [ProdactService],
    }).compile();

    controller = module.get<ProdactController>(ProdactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
