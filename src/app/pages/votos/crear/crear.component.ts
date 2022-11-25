import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesas } from '../../../modelos/mesas.model';
import { MesasService } from '../../../servicios/mesas.service';
import { Votos } from '../../../modelos/votos.model';
import { VotosService } from '../../../servicios/votos.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_voto: string = "";
  intentoEnvio: boolean = false;
  listamesa = []
  relacion1 = ""
  elvoto: Votos = {
    votos_candidato: "",
    votos_totales: "",
    votos_nulos: ""
  }

  constructor(private miServicimesa: MesasService,
    private miServicioVoto: VotosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicimesa.listar().
      subscribe(data => {
        this.listamesa=data;
      });
  }

  crear(): void {
    if (this.relacion1!= "") {
      this.intentoEnvio = true;
      this.miServicioVoto.crear(this.relacion1,this.elvoto).
        subscribe(data => {
          Swal.fire(
            'Creacion Exitosa',
            'El nuevo voto se a creado correctamente',
            'success'
          )
          this.router.navigate(["pages/votos/relacionar"]);
        });
    }
}
}
