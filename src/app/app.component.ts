import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { PruebasService } from './pruebas.service';
import { ExcelService } from './excel.service';



import { pipeline } from '@xenova/transformers'; // or `import { pipeline } from '@xenova/transformers/pipeline';`
// import { WaveFile } from 'wavefile';  // or `import { WaveFile } from 'wavefile/lib/wavefile';` 
// import * as wavefile from 'wavefile';
// import { writeFileSync } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-proyect';
  data: any;
  $events!: string;
  textoAConvertir: string = '';
  constructor(private logger: NGXLogger,
    private pruebasService: PruebasService,
    private excelService: ExcelService) {


  }

  async descarga(): Promise<void> {
    this.data = await this.pruebasService.getPrueba().toPromise();
    console.log(this.data);
    this.excelService.download(this.data);
  }

  // -------------- generador de audio ----------------


  async leer(): Promise<any> {
    
      //   const mensaje = new SpeechSynthesisUtterance(this.textoAConvertir);
      //   window.speechSynthesis.speak(mensaje);
      // } else {
      //   alert('Escribe algo en el campo de texto antes de descargar.');
      // }
      if (this.textoAConvertir) {
        setInterval(() => {
        const mensaje = new SpeechSynthesisUtterance(this.textoAConvertir);
        console.log(mensaje);
        const vocesDisponibles = window.speechSynthesis.getVoices();
        const vozDeMujer = vocesDisponibles.find(voice => voice.name === 'Microsoft Sabina Desktop - Spanish (Mexico)');
        if (vozDeMujer) {
          mensaje.voice = vozDeMujer;
        } else {
          console.warn('No se encontró una voz de mujer. Se usará la voz predeterminada.');
        }
        window.speechSynthesis.speak(mensaje);
      },10000);  
      } else {
        alert('Escribe algo en el campo de texto antes de escuchar.');
      }

  }
}


