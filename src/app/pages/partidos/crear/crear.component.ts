import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Partidos } from '../../../modelos/partidos.model';
import { PartidosService } from '../../../servicios/partidos.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_partido: string = "";
  intentoEnvio: boolean = false;
  elpartido: Partidos = {
    nombre_partido: "",
    lema: "",
  }
  partido = []
  constructor(private miServicioPartido: PartidosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_candidato) {
      this.modoCreacion = false;
      this.id_partido = this.rutaActiva.snapshot.params.id_candidato;
      this.getpartido(this.id_partido)
    } else {
      this.modoCreacion = true;
    }
  }
  
  getpartido(id: string) {
    this.miServicioPartido.getPartidos(id).
      subscribe(data => {
        this.elpartido = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioPartido.crear(this.elpartido).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El candidato ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["/pages/partidos/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioPartido.editar(this.elpartido._id, this.elpartido).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El candidato ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["/pages/partidos/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elpartido.nombre_partido== ""|| 
       this.elpartido.lema=="" ){
      return false;
    }else{
      return true;
    }
  }
}
