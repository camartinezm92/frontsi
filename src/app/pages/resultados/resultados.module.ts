import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ModificarComponent } from './modificar/modificar.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    EliminarComponent,
    ListarComponent,
    CrearComponent,
    ModificarComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
     NbCardModule,
    FormsModule
  ]
})
export class ResultadosModule { }
