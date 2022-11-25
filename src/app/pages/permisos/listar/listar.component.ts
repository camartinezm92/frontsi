import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Permisos } from '../../../modelos/permisos.model';
import { PermisosService } from '../../../servicios/permisos.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Permisos : Permisos[];
  nombresColumnas: string[] = ['url','metodo'];
  constructor(private miServicioPermisos: PermisosService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioPermisos.listar().
      subscribe(data => {
        this.Permisos=data;
      });
  }
  agregar():void{
    
    console.log("agregando nuevo")
  }
  editar(id:string):void{
    console.log("editando a "+id)
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Permisos',
      text: "Está seguro que quiere eliminar el permiso?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPermisos.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El permiso se ha eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
