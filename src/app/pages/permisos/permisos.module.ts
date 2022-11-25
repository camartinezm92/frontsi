import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRoutingModule } from './permisos-routing.module';
import { EliminarComponent } from './eliminar/eliminar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ListarComponent } from './listar/listar.component';
import { NbCardModule } from '@nebular/theme';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EliminarComponent,
    CrearComponent,
    ModificarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    PermisosRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class PermisosModule { }
