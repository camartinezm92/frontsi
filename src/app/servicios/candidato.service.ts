import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Candidato[]> {
      return this.http.get<Candidato[]>(`${environment.url_gateway}/candidatos`);    
    }
  eliminar(id:string){
    return this.http.delete<Candidato>(`${environment.url_gateway}/candidatos/${id}`,);
    }
}
