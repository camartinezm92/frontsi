import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosrolRoutingModule } from './permisosrol-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    PermisosrolRoutingModule
  ]
})
export class PermisosrolModule { }
