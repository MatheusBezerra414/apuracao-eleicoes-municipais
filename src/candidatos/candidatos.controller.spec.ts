import { Test, TestingModule } from '@nestjs/testing';
import { CandidatosController } from './candidatos.controller';

describe('CandidatosController', () => {
  let controller: CandidatosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidatosController],
    }).compile();

    controller = module.get<CandidatosController>(CandidatosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
