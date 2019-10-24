import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as favicon from 'serve-favicon';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(favicon(join(__dirname, 'assets', 'favicon.ico')));
  await app.listen(3000);
}
bootstrap();
