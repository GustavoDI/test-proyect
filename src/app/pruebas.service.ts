import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(
    private httpCliente: HttpClient
  ) { }

  getPrueba() {
    const dataExcel = this.httpCliente.get('http://localhost:3000/data');
    return dataExcel;
  }
}
