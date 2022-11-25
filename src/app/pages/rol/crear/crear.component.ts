import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol.model';
import { RolService } from '../../../servicios/rol.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_rol: string = "";
  intentoEnvio: boolean = false;
  elrol: Rol = {
    nombre: "",
    descripcion: ""
  }
  rol = []
  constructor(private miServiciorol: RolService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_rol) {
      this.modoCreacion = false;
      this.id_rol = this.rutaActiva.snapshot.params.id_rol;
      this.getrol(this.id_rol)
    } else {
      this.modoCreacion = true;
    }
  }
  
  getrol(id: string) {
    this.miServiciorol.getRol(id).
      subscribe(data => {
        this.elrol = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServiciorol.crear(this.elrol).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El rol ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["/pages/rol/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServiciorol.editar(this.elrol._id, this.elrol).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El rol ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["/pages/rol/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elrol.nombre=="" || 
       this.elrol.descripcion==""){
      return false;
    }else{
      return true;
    }
  }
}
