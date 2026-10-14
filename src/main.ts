import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import cookieParser from 'cookie-parser';
import mustache from 'mustache-express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    instrument: ObserveInstrument,
  });
  app.use(cookieParser("RAHASIA"));

  app.set('views', join(__dirname, '..', 'views'));
  app.set('view engine', 'html');
  app.engine('html', mustache());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
