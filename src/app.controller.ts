import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


// controller è una classe che controlla l'intero flow.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // in questo metodo possiamo inserire al suo interno una stringa, che indicherà il path da seguire per visualizzarle la "pagina"
  getHello(): string {
    return this.appService.getHello();
  }
}
