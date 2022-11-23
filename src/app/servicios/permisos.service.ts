import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Permisos } from '../modelos/permisos.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Permisos[]> {
      return this.http.get<Permisos[]>(`${environment.url_gateway}/permisos`);    
    }
  eliminar(id:string){
    return this.http.delete<Permisos>(`${environment.url_gateway}/permisos/${id}`,);
    }
}