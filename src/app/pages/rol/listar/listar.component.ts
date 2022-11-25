import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol.model';
import { RolService } from '../../../servicios/rol.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Rol : Rol[];
  nombresColumnas: string[] = ['nombre','descripcion'];
  constructor(private miServicioRol: RolService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioRol.listar().
      subscribe(data => {
        this.Rol=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/rol/crear"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/rol/modificar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Rol',
      text: "Está seguro que quiere eliminar el rol?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioRol.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El rol se ha eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}