import { Module } from '@nestjs/common';
import { ComputadorService } from './computador.service';
import { ComputadorController } from './computador.controller';
import { DrizzleModule } from 'src/db/drizzle/drizzle.modules';

@Module({
  controllers: [ComputadorController],
  providers: [ComputadorService],
  imports: [DrizzleModule]
})
export class ComputadorModule {}
