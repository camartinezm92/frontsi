import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { NbCardModule } from '@nebular/theme';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModificarComponent,
    EliminarComponent,
    CrearComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    RolRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class RolModule { }
