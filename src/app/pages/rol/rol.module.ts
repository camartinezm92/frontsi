import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    ModificarComponent,
    EliminarComponent,
    CrearComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    RolRoutingModule
  ]
})
export class RolModule { }
