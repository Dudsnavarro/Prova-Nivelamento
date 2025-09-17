import { Module } from '@nestjs/common';
import { PerifericosService } from './perifericos.service';
import { PerifericosController } from './perifericos.controller';
import { DrizzleModule } from 'src/db/drizzle/drizzle.modules';

@Module({
  controllers: [PerifericosController],
  providers: [PerifericosService],
  imports: [DrizzleModule]
})
export class PerifericosModule {}
