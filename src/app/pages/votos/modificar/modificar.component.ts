import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesas } from '../../../modelos/mesas.model';
import { MesasService } from '../../../servicios/mesas.service';
import { Votos } from '../../../modelos/votos.model';
import { VotosService } from '../../../servicios/votos.service';

@Component({
  selector: 'ngx-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {
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

  modificar(): void {
    if (this.relacion1!= "") {
      this.intentoEnvio = true;
      this.miServicioVoto.editar(this.elvoto._id,this.relacion1,this.elvoto).
        subscribe(data => {
          Swal.fire(
            'Modificacion Exitosa',
            'El nuevo voto se a creado correctamente',
            'success'
          )
          this.router.navigate(["pages/votos/relacionar"]);
        });
    }
}
}
