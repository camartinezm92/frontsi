import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { CandidatosService } from '../../../servicios/candidato.service';
import { Votos } from '../../../modelos/votos.model';
import { VotosService } from '../../../servicios/votos.service';

@Component({
  selector: 'ngx-relacionar',
  templateUrl: './relacionar.component.html',
  styleUrls: ['./relacionar.component.scss']
})
export class RelacionarComponent implements OnInit {
  modoCreacion: boolean = true;
  id_candidato: string = "";
  intentoEnvio: boolean = false;
  listacandidatos = []
  listavotos = []
  relacion1 = ""
  relacion2=""
  constructor(private miServicioCandidato: CandidatosService,
    private miServicioVotos: VotosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
    this.listar2();
  }
  listar():void{
    this.miServicioCandidato.listar().
      subscribe(data => {
        this.listacandidatos=data;
      });
  }
  listar2():void{
    this.miServicioVotos.listar().
      subscribe(data => {
        this.listavotos=data;
      });
  }

  relacionar(): void {
    if (this.relacion1!= "" && this.relacion2!="") {
      this.intentoEnvio = true;
      this.miServicioVotos.relacionar(this.relacion1,this.relacion2).
        subscribe(data => {
          Swal.fire(
            'Relacionado',
            'El candidato y sus votos se han relacionado correctamente',
            'success'
          )
          this.router.navigate(["pages/votos/listar"]);
        });
    }
}
}

