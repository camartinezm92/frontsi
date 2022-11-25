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
  eliminar(id: string) {
    return this.http.delete<Permisosrol>(`${environment.url_gateway}/permisos-roles/${id}`,);
  }
  getPermisosrol(id: string): Observable<Permisosrol> {
    return this.http.get<Permisosrol>(`${environment.url_gateway}/permisos-roles/${id}`);
  }
  crear(id: string,id2: string) {
    return this.http.post(`${environment.url_gateway}/permisos-roles/rol/${id}/permiso/${id2}`,null);
  }
  editar(id_permisorol:string,relacion1:String,relacion2: String) {
    return this.http.put(`${environment.url_gateway}/permisos-roles/${id_permisorol}/rol/${relacion1}/permiso/${relacion2}`,null);
  }
  validar(id: string,) {
    return this.http.put(`${environment.url_gateway}/permisos-roles/validar-permisos/rol/${id}`,null);
  }

}
