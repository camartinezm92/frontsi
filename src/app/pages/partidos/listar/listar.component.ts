import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Partidos } from '../../../modelos/partidos.model';
import { PartidosService } from '../../../servicios/partidos.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Partidos : Partidos[];
  nombresColumnas: string[] = ['nombre_partido','lema'];
  constructor(private miServicioPartidos: PartidosService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioPartidos.listar().
      subscribe(data => {
        this.Partidos=data;
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
      title: 'Eliminar Partidos',
      text: "Está seguro que quiere eliminar el partido?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPartidos.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El partido se ha eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}