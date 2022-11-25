import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { NbCardModule } from '@nebular/theme';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RelacionarComponent } from './relacionar/relacionar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    EliminarComponent,
    ModificarComponent,
    RelacionarComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class CandidatosModule { }
