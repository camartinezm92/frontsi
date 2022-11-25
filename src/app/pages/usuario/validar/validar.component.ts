import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'ngx-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.scss']
})
export class ValidarComponent implements OnInit {
  modoCreacion: boolean = true;
  id_usuario: string = "";
  intentoEnvio: boolean = false;
  elusuario: Usuario = {
    cedula: "",
    nombre: "",
    correo: "",
    contrasena:"",
    contrasena2:""
  }
  usuario = []
  constructor(private miServicioUsuario: UsuarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_usuario) {
      this.modoCreacion = false;
      this.id_usuario = this.rutaActiva.snapshot.params.id_usuario;
      this.getUsuario(this.id_usuario)
    } else {
      this.modoCreacion = true;
    }
  }
  
  getUsuario(id: string) {
    this.miServicioUsuario.getusuario(id).
      subscribe(data => {
        this.elusuario = data;
      });
  }
  validar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioUsuario.validar(this.elusuario).
        subscribe(data => {
          Swal.fire(
            'Los Datos Ingresados son correctos',
            'El Usuario ha sido Validado correctamente',
            'success'
          )
          this.router.navigate(["/pages/usuarios/listar"]);
        });
    }

  }

  agregar2(): void {
    if (this.validarDatosCompletos() && this.elusuario.contrasena == this.elusuario.contrasena2) {
      this.intentoEnvio = true;
      this.miServicioUsuario.sinvcrear(this.elusuario).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El Usuario ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["/pages/seguridad/login"]);
        });
    }

  }

  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioUsuario.editar(this.elusuario._id, this.elusuario).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El Usuario ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["/pages/usuarios/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if( this.elusuario.nombre=="" || 
       this.elusuario.contrasena==""){
      return false;
    }else{
      return true;
    }
  }
}

