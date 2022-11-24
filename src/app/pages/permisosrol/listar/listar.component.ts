import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Permisosrol } from '../../../modelos/permisosrol.model';
import { PermisosrolService } from '../../../servicios/permisosrol.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Permisosrol : Permisosrol[];
  nombresColumnas: string[] = ['Cedula','Nombre','Apellido','Numero Resolucion','Partido','Mesa','Incritos Mesa','Voto'];
  constructor(private miServicioPermisosrol: PermisosrolService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioPermisosrol.listar().
      subscribe(data => {
        this.Permisosrol=data;
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
      title: 'Eliminar Permisosrol',
      text: "Está seguro que quiere eliminar el permisosrol?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPermisosrol.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El permisosrol se ha eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}