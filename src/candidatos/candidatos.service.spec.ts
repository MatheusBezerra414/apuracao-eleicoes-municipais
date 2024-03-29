import { Test, TestingModule } from '@nestjs/testing';
import { CandidatosService } from './candidatos.service';

describe('CandidatosService', () => {
  let service: CandidatosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidatosService],
    }).compile();

    service = module.get<CandidatosService>(CandidatosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
