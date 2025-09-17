import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // libera todas origens (apenas para teste)

  await app.listen(3000);
}
bootstrap();