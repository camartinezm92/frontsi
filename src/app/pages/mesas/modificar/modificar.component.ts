import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesas } from '../../../modelos/mesas.model';
import { MesasService } from '../../../servicios/mesas.service';

@Component({
  selector: 'ngx-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  modoCreacion: boolean = true;
  id_mesa: string = "";
  intentoEnvio: boolean = false;
  lamesa: Mesas = {
    numero_mesa: "",
    cantidad_inscritos: "",
    id_jurado_inscrito: "",
  }
  constructor(private miServicioMesas: MesasService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_mesa) {
      this.modoCreacion = false;
      this.id_mesa = this.rutaActiva.snapshot.params.id_mesa;
      this.getmesas(this.id_mesa)
    } else {
      this.modoCreacion = true;
    }
  }
  getmesas(id: string) {
    this.miServicioMesas.getMesas(id).
      subscribe(data => {
        this.lamesa = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioMesas.crear(this.lamesa).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'La mesa ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/mesas/listar"]);
        });
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioMesas.editar(this.lamesa._id, this.lamesa).
        subscribe(data => {
          Swal.fire(
            'Modificado',
            'La Mesa ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["/pages/mesas/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.lamesa.cantidad_inscritos=="" || 
       this.lamesa.id_jurado_inscrito=="" || 
       this.lamesa.numero_mesa==""){
        
      return false;
    }else{
      return true;
    }
  }
}
