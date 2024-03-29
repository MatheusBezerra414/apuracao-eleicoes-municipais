import { Module } from '@nestjs/common';
import { CandidatosService } from './candidatos.service';
import { CandidatosController } from './candidatos.controller';

@Module({
  providers: [CandidatosService],
  controllers: [CandidatosController],
})
export class CandidatosModule {}
