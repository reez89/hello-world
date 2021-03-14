import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
  const APP_DIRECTORY = resolve(__dirname,'..');

 /*  const app = await NestFactory.create(AppModule); */
  const app = await NestFactory.create<NestApplication>(AppModule); // questo è il nuovo metodo per dare accesso ai metodi relativi al nostro oggetto.
  app.setViewEngine('hbs');
  app.setBaseViewsDir(resolve(APP_DIRECTORY, 'views'));
  app.useStaticAssets(resolve(APP_DIRECTORY, 'public'));
  
  await app.listen(3000);
}
bootstrap();
