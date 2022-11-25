import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ciclo4RoutingModule } from './ciclo4-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SinuComponent } from './sinu/sinu.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    SinuComponent
  ],
  imports: [
    CommonModule,
    Ciclo4RoutingModule,
    NbCardModule,
    FormsModule

  ]
})
export class Ciclo4Module { }
