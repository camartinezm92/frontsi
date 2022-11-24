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
      return this.http.get<Usuario[]>(`${environment.url_gateway}/usuario`);    
    }
  eliminar(id:string){
    return this.http.delete<Usuario>(`${environment.url_gateway}/usuario/${id}`,);
    }
}