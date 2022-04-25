import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styles: [
  ]
})
export class DatosComponent implements OnInit  {

  apiId = JSON.parse(localStorage.getItem('res')!) || [];

  constructor(private router:Router,  private service:ServiceService) { 
    this.apiId = JSON.parse(localStorage.getItem('res')!) || [];
  }

  ngOnInit(): void {
    let razon:string = this.service.razon;
    let numero:number = this.service.numero;

    this.service.obtenerDatos(`${razon}/${numero}`).subscribe((data:any) => {
      this.apiId = data.infDataDos
      localStorage.setItem('res', JSON.stringify(this.apiId));
    });
  }


  guardar(){

    this.router.navigate(['/inicio'])
  }



}
