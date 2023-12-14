import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  private _workbook!: Workbook
  constructor() { }

  async download(dataExcel: any): Promise<void> {
    // crreacion de libro
    this._workbook = new Workbook();
    //creacion de hoja
    this._workbook.creator = 'Gustavoz';
    // creacion de hoja
    await this.createtable(dataExcel);
    // creación del libro
    this._workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Reporte.xlsx');
    });
  }

  // creacion de hoja
  private async createtable(dataExcel: any) {
    //creación de hoja
    const sheet = this._workbook.addWorksheet('Reporte');
    //establecer el ancho de columna
    sheet.getColumn(2).width = 20;
    sheet.getColumn(3).width = 15;
    sheet.getColumn(4).width = 15;
    sheet.getColumn(5).width = 15;
    sheet.getColumn(6).width = 15;
    sheet.getColumn(7).width = 15;
    sheet.getColumn(8).width = 15;
    sheet.getColumn(9).width = 15;
    sheet.getColumn(10).width = 15;
    sheet.getColumn(11).width = 15;
    sheet.getColumn(12).width = 20;
    sheet.getColumn(13).width = 20;

    // Alinear texto de las columnas
    sheet.columns.forEach(column => {
      column.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
    );
    // agregar el titulo
    sheet.mergeCells('B2:E2');
    const titleCell = sheet.getCell('B2');
    titleCell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
    // agregamos estilo al titulo
    titleCell.font = {
      name: 'Arial Black',
      size: 16,
      bold: true
    };
    // Nombre del titulo
    titleCell.value = 'Reporte de espera (no agrupado)';

    // agregar subtitulo
    const subtitleCell1 = sheet.getCell('B4');
    subtitleCell1.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    // agregamos estilo al titulo
    subtitleCell1.font = {
      name: 'Arial Black',
      size: 14,
      bold: true
    };
    sheet.mergeCells('C4:F4');
    const subtitleCell2 = sheet.getCell('C4');
    subtitleCell2.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    // agregamos estilo al titulo
    subtitleCell2.font = {
      name: 'Arial Black',
      size: 14,
      bold: true
    };
    sheet.mergeCells('G4:H4');
    const subtitleCell3 = sheet.getCell('G4');
    subtitleCell3.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    // agregamos estilo al titulo
    subtitleCell3.font = {
      name: 'Arial Black',
      size: 14,
      bold: true
    };
    sheet.mergeCells('J4:K4');
    const subtitleCell4 = sheet.getCell('J4');
    subtitleCell4.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    // agregamos estilo al titulo
    subtitleCell4.font = {
      name: 'Arial Black',
      size: 14,
      bold: true
    };
    const subtitleCell5 = sheet.getCell('L4');
    subtitleCell5.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    // agregamos estilo al titulo
    subtitleCell5.font = {
      name: 'Arial Black',
      size: 14,
      bold: true
    };
    const subtitleCell6 = sheet.getCell('M4');
    subtitleCell6.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    // agregamos estilo al titulo
    subtitleCell6.font = {
      name: 'Arial Black',
      size: 14,
      bold: true
    };

    // Nombre de los subtitulos
    subtitleCell1.value = 'Rango espera';
    subtitleCell2.value = 'Clienes atendidos';
    subtitleCell3.value = 'Clienes perdidos';
    subtitleCell4.value = '% Total';
    subtitleCell5.value = 'Espera Acumulado';
    subtitleCell6.value = 'Delta espera acumulado';


    // titulos de las columnas
    const cabeceras = sheet.getRow(5);
    // insertar los titulos
    cabeceras.values = ['', 'Minutos', 'Normal', 'Tol', 'Especial', 'Total', '%', '#', '%', 'Rango', 'Acumulado', '', ''];
    cabeceras.font = {
      name: 'Arial',
      size: 12,
      bold: true
    };

    //agregar colores solo a las cabeceras
    ['B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4', 'K4', 'L4', 'M4'].forEach(key => {
      const cell = sheet.getCell(key);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF00FF00' },
        bgColor: { argb: 'FF00FF00' }
      };
      cell.border = { 
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    }
    );
    ['B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5', 'K5', 'L5', 'M5'].forEach(key => {
      const cell = sheet.getCell(key);
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF00FF00' },
        bgColor: { argb: 'FF00FF00' }
      };
      cell.border = { 
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    }
    );
  
    // agregar bordes a las celdas

    //agregar valores a las celdas
    let cont = 7;
    console.log(dataExcel);
    dataExcel.forEach((element: any) => {
      if (element.rngtxt === 'SERIE') {
        
        sheet.mergeCells(`B${cont}:M${cont}`);
        const cell = sheet.getCell(`B${cont}`);
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF00FF00' },
          bgColor: { argb: 'FF00FF00' }
        };
        cell.border = { 
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
        cell.font = {
          name: 'Arial',
          size: 12,
          bold: true
        };
        cell.value = element.rngtxt;
        cont++;
      }
      const row = sheet.getRow(cont);
      row.values = [
        '',
        element.rngtxt,
        element.qAteNOfi,
        element.qAteTOL,
        element.qAteE,
        element.qAteT,
        element.pAte,
        element.qPer,
        element.pPer,
        element.pRan,
        element.pAcu,
        element.tEspA,
        element.tEspDA,
      ];
      cont++;
    });
    
  }


}// fin de la clase
