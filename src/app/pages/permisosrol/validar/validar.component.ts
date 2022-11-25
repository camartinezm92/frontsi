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
  selector: 'ngx-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.scss']
})
export class ValidarComponent implements OnInit {
  elpermisorol  : Permisosrol[]
  modoCreacion: boolean = true;
  id_Rol: string = "";
  intentoEnvio: boolean = false;
  listaRol = []
  relacion1 = ""
  
  constructor(private miServicioRol: RolService,
    private miServiciopermisos: PermisosService,
    private miServiciopermisosrol: PermisosrolService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioRol.listar().
      subscribe(data => {
        this.listaRol=data;
      });
  }

  validar(): void {
    if (this.relacion1!= "") {
      this.intentoEnvio = true;
      this.miServiciopermisosrol.validar(this.relacion1).
        subscribe(data => {data => {
          this.elpermisorol=data;
          }
          Swal.fire(
            'Relacionado',
            'El Rol y el partido se han relacionado correctamente',
            'success'
          )
          this.router.navigate(["pages/permisosrol/listar"]);
        });
    }
}
}