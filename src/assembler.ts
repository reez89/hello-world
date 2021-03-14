import { AppService } from './app.service';
import { AppController } from './app.controller';

// questa applicazione ( assembler.ts) non è collegata a nestjs.
const appService = new AppService();
const appController = new AppController(appService); // bisogna sempre assegnare una variabile all'interno.

const hello = appController.getHello();
console.log(hello);
