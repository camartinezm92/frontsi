import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { RelacionarComponent } from './relacionar/relacionar.component';
import { ValidarComponent } from './validar/validar.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ModificarComponent,
    EliminarComponent,
    RelacionarComponent,
    ValidarComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class UsuarioModule { }
