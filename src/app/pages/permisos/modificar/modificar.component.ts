import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Permisos } from '../../../modelos/permisos.model';
import { PermisosService } from '../../../servicios/permisos.service';

@Component({
  selector: 'ngx-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  modoCreacion: boolean = true;
  id_permiso: string = "";
  intentoEnvio: boolean = false;
  elpermiso: Permisos = {
    url: "",
    metodo: "",
  }
  partido = []
  constructor(private miServicioPermisos: PermisosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_candidato) {
      this.modoCreacion = false;
      this.id_permiso = this.rutaActiva.snapshot.params.id_candidato;
      this.getpermiso(this.id_permiso)
    } else {
      this.modoCreacion = true;
    }
  }
  
  getpermiso(id: string) {
    this.miServicioPermisos.getPermisos(id).
      subscribe(data => {
        this.elpermiso = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioPermisos.crear(this.elpermiso).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El Permiso ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["/pages/permisos/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioPermisos.editar(this.elpermiso._id, this.elpermiso).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El Permiso ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["/pages/permisos/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elpermiso.url== ""|| 
       this.elpermiso.metodo=="" ){
      return false;
    }else{
      return true;
    }
  }
}
