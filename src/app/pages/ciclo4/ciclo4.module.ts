import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ciclo4RoutingModule } from './ciclo4-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SinuComponent } from './sinu/sinu.component';


@NgModule({
  declarations: [
    InicioComponent,
    SinuComponent
  ],
  imports: [
    CommonModule,
    Ciclo4RoutingModule
  ]
})
export class Ciclo4Module { }
