import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { UsuarioService } from '../../../servicios/usuario.service';
import { Rol } from '../../../modelos/rol.model';
import { RolService } from '../../../servicios/rol.service';

@Component({
  selector: 'ngx-relacionar',
  templateUrl: './relacionar.component.html',
  styleUrls: ['./relacionar.component.scss']
})
export class RelacionarComponent implements OnInit {
  modoCreacion: boolean = true;
  id_usuario: string = "";
  intentoEnvio: boolean = false;
  listausuarios = []
  listarol = []
  relacion1 = ""
  relacion2=""
  constructor(private miServicioUsuario: UsuarioService,
    private miServicioRol: RolService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
    this.listar2();
  }
  listar():void{
    this.miServicioUsuario.listar().
      subscribe(data => {
        this.listausuarios=data;
      });
  }
  listar2():void{
    this.miServicioRol.listar().
      subscribe(data => {
        this.listarol=data;
      });
  }

  relacionar(): void {
    if (this.relacion1!= "" && this.relacion2!="") {
      this.intentoEnvio = true;
      this.miServicioUsuario.relacionar(this.relacion1,this.relacion2).
        subscribe(data => {
          Swal.fire(
            'Relacionado',
            'El Usuario y el partido se han relacionado correctamente',
            'success'
          )
          this.router.navigate(["pages/usuarios/listar"]);
        });
    }
}
}
