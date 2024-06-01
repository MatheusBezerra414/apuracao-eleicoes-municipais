import { Module } from '@nestjs/common';
import { CandidatosService } from './candidatos.service';
import { CandidatosController } from './candidatos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { candidatosProvider } from './candidatos.provider';

@Module({
  imports: [DatabaseModule],
  providers: [CandidatosService, ...candidatosProvider],
  controllers: [CandidatosController],
})
export class CandidatosModule {}
