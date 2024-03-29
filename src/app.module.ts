import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatosModule } from './candidatos/candidatos.module';

@Module({
  imports: [CandidatosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
