import { Module } from '@nestjs/common';
import { ComputadorModule } from './Modules/computador/computador.module';
import { PerifericosModule } from './Modules/perifericos/perifericos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ComputadorModule,
            PerifericosModule,
            ConfigModule.forRoot({ isGlobal: true }),],
})
export class AppModule {}
