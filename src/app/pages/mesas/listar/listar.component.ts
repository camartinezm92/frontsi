import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesas } from '../../../modelos/mesas.model';
import { MesasService } from '../../../servicios/mesas.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Mesas : Mesas[];
  nombresColumnas: string[] = ['numero_mesa','cantidad_inscritos',' id_jurado_inscrito'];
  constructor(private miServicioMesas: MesasService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioMesas.listar().
      subscribe(data => {
        this.Mesas=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/mesas/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/mesas/modificar/"+id]);
  }
  
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Mesas',
      text: "Está seguro que quiere eliminar la mesa?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioMesas.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'La Mesa se ha eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}