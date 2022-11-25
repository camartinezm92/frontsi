import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Permisosrol } from '../modelos/permisosrol.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PermisosrolService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Permisosrol[]> {
      return this.http.get<Permisosrol[]>(`${environment.url_gateway}/permisos-roles`);    
    }
  eliminar(id:string){
    return this.http.delete<Permisosrol>(`${environment.url_gateway}/permisos-roles/${id}`,);
    }
}
