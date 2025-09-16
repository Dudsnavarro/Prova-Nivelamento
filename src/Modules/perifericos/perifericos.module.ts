import { Module } from '@nestjs/common';
import { PerifericosService } from './perifericos.service';
import { PerifericosController } from './perifericos.controller';

@Module({
  controllers: [PerifericosController],
  providers: [PerifericosService],
})
export class PerifericosModule {}
