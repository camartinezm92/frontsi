import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotosRoutingModule } from './votos-routing.module';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';


@NgModule({
  declarations: [
    EliminarComponent,
    ListarComponent,
    CrearComponent,
    ModificarComponent
  ],
  imports: [
    CommonModule,
    VotosRoutingModule
  ]
})
export class VotosModule { }
