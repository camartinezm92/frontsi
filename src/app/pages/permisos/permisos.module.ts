import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRoutingModule } from './permisos-routing.module';
import { EliminarComponent } from './eliminar/eliminar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    EliminarComponent,
    CrearComponent,
    ModificarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    PermisosRoutingModule
  ]
})
export class PermisosModule { }
