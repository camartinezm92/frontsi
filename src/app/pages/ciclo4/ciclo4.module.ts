import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ciclo4RoutingModule } from './ciclo4-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SinuComponent } from './sinu/sinu.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    InicioComponent,
    SinuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    Ciclo4RoutingModule,
    NbCardModule,
    FormsModule

  ]
})
export class Ciclo4Module { }
