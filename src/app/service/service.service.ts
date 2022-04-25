import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://localhost:8090/api/'
  numero:number = 0;
  razon:string = '';

  constructor(private http:HttpClient) { }

  obtenerDatos(dato:any){
    return this.http.get(`${this.url}${dato}`)
  }

  obtenerId(razon:string, numero:number){
    this.numero = numero
    this.razon = razon

  }

}
