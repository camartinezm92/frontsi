import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mesas } from '../modelos/mesas.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Mesas[]> {
      return this.http.get<Mesas[]>(`${environment.url_gateway}/mesas`);    
    }
  eliminar(id:string){
    return this.http.delete<Mesas>(`${environment.url_gateway}/mesas/${id}`,);
    }
}
