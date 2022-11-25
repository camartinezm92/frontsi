import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { CandidatosService } from '../../../servicios/candidato.service';

@Component({
  selector: 'ngx-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
  modoCreacion: boolean = true;
  id_candidato: string = "";
  intentoEnvio: boolean = false;
  elcandidato: Candidato = {
    cedula: "",
    nombre: "",
    apellido: "",
    numero_resolucion:""
  }
  constructor(private miServicioCandidato: CandidatosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_candidato) {
      this.modoCreacion = false;
      this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
      this.getcandidato(this.id_candidato)
    } else {
      this.modoCreacion = true;
    }
  }
  getcandidato(id: string) {
    this.miServicioCandidato.getCandidato(id).
      subscribe(data => {
        this.elcandidato = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioCandidato.crear(this.elcandidato).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El candidato ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/candidatos/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioCandidato.editar(this.elcandidato._id, this.elcandidato).
        subscribe(data => {
          Swal.fire(
            'Modificado',
            'El candidato ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["/pages/candidatos/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elcandidato.cedula=="" || 
       this.elcandidato.nombre=="" || 
       this.elcandidato.apellido==""||
       this.elcandidato.numero_resolucion==""){
        
      return false;
    }else{
      return true;
    }
  }
}
