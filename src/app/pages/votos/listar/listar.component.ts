import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Votos } from '../../../modelos/votos.model';
import { VotosService } from '../../../servicios/votos.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Votos : Votos[];
  nombresColumnas: string[] = ['candidato','votos candidato','mesa','votos en mesa','votos nulos Mesa'];
  constructor(private miServicioVotos: VotosService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioVotos.listar().
      subscribe(data => {
        this.Votos=data;
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
      title: 'Eliminar Votos',
      text: "Está seguro que quiere eliminar el voto?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioVotos.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El voto se ha eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}