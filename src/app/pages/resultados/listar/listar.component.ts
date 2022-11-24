import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Resultados } from '../../../modelos/resultados.model';
import { ResultadosService } from '../../../servicios/resultados.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Resultados : Resultados[];
  nombresColumnas: string[] = ['Cedula','Nombre','Apellido','Numero Resolucion','Partido','Mesa','Incritos Mesa','Voto'];
  constructor(private miServicioResultados: ResultadosService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioResultados.listar().
      subscribe(data => {
        this.Resultados=data;
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
      title: 'Eliminar Resultados',
      text: "Está seguro que quiere eliminar el resultado?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioResultados.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El resultado se ha eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
