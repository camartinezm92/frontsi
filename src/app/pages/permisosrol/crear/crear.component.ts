import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from '../../../modelos/rol.model';
import { RolService } from '../../../servicios/rol.service';
import { Permisos } from '../../../modelos/permisos.model';
import { PermisosService } from '../../../servicios/permisos.service';
import { PermisosrolService } from '../../../servicios/permisosrol.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_Rol: string = "";
  intentoEnvio: boolean = false;
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

  crear(): void {
    if (this.relacion1!= "" && this.relacion2!="") {
      this.intentoEnvio = true;
      this.miServiciopermisosrol.crear(this.relacion1,this.relacion2).
        subscribe(data => {
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
