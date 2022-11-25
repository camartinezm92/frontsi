import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Rol } from '../modelos/rol.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.url_gateway}/roles`);
  }
  eliminar(id: string) {
    return this.http.delete<Rol>(`${environment.url_gateway}/roles/${id}`,);
  }
  getRol(id: string): Observable<Rol> {
    return this.http.get<Rol>(`${environment.url_gateway}/roles/${id}`);
  }
  crear(elrol: Rol) {
    return this.http.post(`${environment.url_gateway}/roles`, elrol);
  }
  editar(id:string,elrol: Rol) {
    return this.http.put(`${environment.url_gateway}/roles/${id}`, elrol);
  }

}