import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

  constructor(private fb:FormBuilder, private router:Router, private service:ServiceService) { }


  miFormulario:FormGroup = this.fb.group ({
    username: [''],
    password: ['', [Validators.required]]
  })

  validacion(campo:string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched 
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    if(this.miFormulario.value.password.toString().length < 8 && this.miFormulario.value.password.toString().length > 11) {

      this.miFormulario.reset();

      this.miFormulario.markAllAsTouched();
      return;
    }

    this.service.obtenerId(this.miFormulario.value.username, this.miFormulario.value.password)

    console.log(this.miFormulario.value.username)
    this.miFormulario.reset();
    this.router.navigate(['/datos'])

}}
