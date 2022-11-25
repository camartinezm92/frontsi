import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosrolRoutingModule } from './permisosrol-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { NbCardModule } from '@nebular/theme';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ValidarComponent } from './validar/validar.component';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    EliminarComponent,
    ValidarComponent
  ],
  imports: [
    CommonModule,
    PermisosrolRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class PermisosrolModule { }