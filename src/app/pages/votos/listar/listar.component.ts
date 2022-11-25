import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  x = ""
  nombresColumnas: string[] = ['candidato','votos candidato','mesa','votos en mesa','votos nulos Mesa'];
  constructor(private miServicioVotos: VotosService,
    private router : Router) {
    
     }

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
    this.router.navigate(["pages/votos/crear"]);
  }
  editar(x:string):void{
    this.router.navigate(["pages/votos/modificar/"+x]);
  }
  relacionar():void{
  this.router.navigate(["pages/votos/relacionar/"]);
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