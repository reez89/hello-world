import { Injectable } from '@nestjs/common';


// in questa pagina vengono eseguite,e quindi esportati, i metodi creati in app.controller.ts
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
