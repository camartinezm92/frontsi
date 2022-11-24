import { Injectable } from '@angular/core';
import {
  HttpRequest, //pedicion
  HttpHandler, // manejar peticion
  HttpEvent, // evento http
  HttpInterceptor, // intersepta todas las comunicaciones
  HttpErrorResponse  //respues relacionadas ára http
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; //  se usa paara peticiones asincronas 
import { Router } from '@angular/router'; // se van a asignar rutas dentro de interceptor 
import { SeguridadService } from '../servicios/seguridad.service'; // accede ar servicio de seguridad dentro del angular
import Swal from 'sweetalert2'; // alertas visuales
import { catchError } from 'rxjs/operators'; // fucionameinto asincrono a errores presentados


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public miServicioSeguridad: SeguridadService, private router: Router) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("agregando token ",this.miServicioSeguridad.usuarioSesionActiva.token)
    if (this.miServicioSeguridad.usuarioSesionActiva) {
      console.log("agregando token ",this.miServicioSeguridad.usuarioSesionActiva.token)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.miServicioSeguridad.usuarioSesionActiva.token}`
        }  // clona la peticion realizada e incluya el token 
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          error=>{
            Swal.fire({
                title: 'Inicie Sesion',
                text: error["error"]["Inicie Sesion primero"],
                icon: 'error',
                timer:5000 
        });
      }
          this.router.navigateByUrl('/pages/seguridad/login');
        }
        return throwError(err);
      })
    );
  }
}
