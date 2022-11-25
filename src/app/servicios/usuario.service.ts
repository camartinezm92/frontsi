import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.url_gateway}/usuarios`);
  }
  eliminar(id: string) {
    return this.http.delete<Usuario>(`${environment.url_gateway}/usuarios/${id}`,);
  }
  getusuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.url_gateway}/usuarios/${id}`);
  }
  crear(elusuario: Usuario) {
    return this.http.post(`${environment.url_gateway}/usuarios`, elusuario);
  }
  sinvcrear(elusuario: Usuario) {
    return this.http.post(`127.0.0.1:8000/usuarios`, elusuario);
  }
  editar(id:string,elusuario: Usuario) {
    return this.http.put(`${environment.url_gateway}/usuarios/${id}`, elusuario);
  }
  relacionar(id: string,id2: string) {
    return this.http.put(`${environment.url_gateway}/usuarios/${id}/partidos/${id2}`,null);
  }
  validar(elusuario: Usuario) {
    return this.http.post(`${environment.url_gateway}/usuarios/validar`, elusuario);
  }

}
