import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol.model';
import { RolService } from '../../../servicios/rol.service';
import { Permisos } from '../../../modelos/permisos.model';
import { PermisosService } from '../../../servicios/permisos.service';
import { PermisosrolService } from '../../../servicios/permisosrol.service';
import { Permisosrol } from '../../../modelos/permisosrol.model';

@Component({
  selector: 'ngx-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  modoCreacion: boolean = true;
  id_permisorol: string = "";
  intentoEnvio: boolean = false;
  elpermisorol: Permisosrol = {
  rol: "",
  permiso: "",
  }
  listaRol = []
  listapermisos = []
  relacion1 = ""
  relacion2=""
  constructor(private miServicioRol: RolService,
    private miServiciopermisos: PermisosService,
    private miServiciopermisosrol: PermisosrolService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
    this.listar2();
  }
  listar():void{
    this.miServicioRol.listar().
      subscribe(data => {
        this.listaRol=data;
      });
  }
  listar2():void{
    this.miServiciopermisos.listar().
      subscribe(data => {
        this.listapermisos=data;
      });
  }

  editar(): void {
    if (this.elpermisorol._id!="" && this.relacion1!= "" && this.relacion2!="") {
      this.intentoEnvio = true;
      this.miServiciopermisosrol.editar(this.elpermisorol._id,this.relacion1,this.relacion2).
        subscribe(data => {
          Swal.fire(
            'Modifidado',
            'El Rol y el partido se han relacionado correctamente',
            'success'
          )
          this.router.navigate(["pages/permisosrol/listar"]);
        });
    }
}
}
