import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Votos } from '../modelos/votos.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Votos[]> {
      return this.http.get<Votos[]>(`${environment.url_gateway}/votos`);    
    }
  eliminar(id:string){
    return this.http.delete<Votos>(`${environment.url_gateway}/votos/${id}`,);
    }
}