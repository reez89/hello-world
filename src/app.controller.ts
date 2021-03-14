import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

interface ILocationListDto{
  locations: string[];
}
// controller è una classe che controlla l'intero flow.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // in questo metodo possiamo inserire al suo interno una stringa, che indicherà il path da seguire per visualizzarle la "pagina"
  @Render('list.hbs')
  listLocations(): ILocationListDto {
    return {
      locations : [
        'location 1',
        'location 2',
        'location 3'
      ],
    };
  }
}
