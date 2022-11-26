import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  Usuario : Usuario[];
  nombresColumnas: string[] = ['nombre','correo','cedula','rol','Accion'];
  constructor(private miServicioUsuario: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioUsuario.listar().
      subscribe(data => {
        this.Usuario=data;
      });
  }
  agregar():void{
    this.router.navigate(["pages/usuarios/crear"]);
  }
  relacionar():void{
    this.router.navigate(["pages/usuarios/relacionar"]);
  }
  editar(id:string):void{
    this.router.navigate(["pages/usuarios/modificar/"+id]);
  }
  eliminar(id:string):void{
    Swal.fire({
      title: 'Eliminar Usuario',
      text: "Está seguro que quiere eliminar el usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioUsuario.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El usuario se ha eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}