import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatosComponent } from './datos/datos.component';

const routes: Routes = [
  {
    path:'inicio',
    component: HomeComponent
  },
  {
    path:'datos',
    component: DatosComponent
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
