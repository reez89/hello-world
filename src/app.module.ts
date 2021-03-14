import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 

//un modulo è un pò come un bundle che può contenere nested modules.

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
