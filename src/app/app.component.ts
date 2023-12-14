import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { PruebasService } from './pruebas.service';
import { ExcelService } from './excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logger-test-proyect';
  data: any;
  constructor(private logger: NGXLogger,
    private pruebasService: PruebasService,
    private excelService: ExcelService) {

    
  }

  async  descarga(): Promise<void> {
    this.data = await this.pruebasService.getPrueba().toPromise();
    console.log(this.data);
    this.excelService.download(this.data);
  }


  
}



