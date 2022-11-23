import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    EliminarComponent,
    ModificarComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    NbCardModule
  ]
})
export class CandidatosModule { }
