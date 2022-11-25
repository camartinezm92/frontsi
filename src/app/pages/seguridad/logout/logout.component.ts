import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';


@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private miServicioSeguridad : SeguridadService,
    private router: Router) {console.debug('Constructor LOGOUT')};

  ngOnInit(): void {
    Swal.fire({
      title: 'Salida segura',
      text: "Está seguro que quiere Salir?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, salir'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioSeguridad.logout();
            Swal.fire(
              'Exitoso',
              'Cerro sesin correctmente correctamente',
              'success'
            )
            this.ngOnInit();
            }
          });
      }

  }



