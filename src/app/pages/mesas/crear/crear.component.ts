import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesas } from '../../../modelos/mesas.model';
import { MesasService } from '../../../servicios/mesas.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_mesas: string = "";
  intentoEnvio: boolean = false;
  lamesa: Mesas = {
    numero_mesa: "",
    cantidad_inscritos: "",
    id_jurado_inscrito: ""
  }
  mesas = []
  constructor(private miServiciomesas: MesasService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_mesas) {
      this.modoCreacion = false;
      this.id_mesas = this.rutaActiva.snapshot.params.id_mesas;
      this.getmesas(this.id_mesas)
    } else {
      this.modoCreacion = true;
    }
  }
  getmesas(id: string) {
    this.miServiciomesas.getMesas(id).
      subscribe(data => {
        this.lamesa = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServiciomesas.crear(this.lamesa).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El mesas ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/mesas/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServiciomesas.editar(this.lamesa._id, this.lamesa).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El mesas ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/mesas/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.lamesa.numero_mesa=="" || 
       this.lamesa.cantidad_inscritos=="" || 
       this.lamesa.id_jurado_inscrito==""){
        
      return false;
    }else{
      return true;
    }
  }
}
