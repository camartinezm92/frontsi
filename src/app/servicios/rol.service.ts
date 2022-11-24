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
      return this.http.get<Rol[]>(`${environment.url_gateway}/rol`);    
    }
  eliminar(id:string){
    return this.http.delete<Rol>(`${environment.url_gateway}/rol/${id}`,);
    }
}