require('dotenv').config(); // tslint:disable-line:no-var-requires
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'modules/app/App.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
