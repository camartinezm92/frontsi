import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { RelacionarComponent } from './relacionar/relacionar.component';
import { ValidarComponent } from './validar/validar.component';

const routes: Routes = [
  {
    path: 'crear',
    component:CrearComponent
  },  {
    path: 'eliminar',
    component:EliminarComponent
  },  {
    path: 'listar',
    component:ListarComponent
  },  {
    path: 'modificar/:id',
    component:ModificarComponent
  },  {
    path: 'relacionar',
    component:RelacionarComponent
  },  {
    path: 'validar',
    component:ValidarComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
