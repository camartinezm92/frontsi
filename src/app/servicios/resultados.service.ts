import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Resultados } from '../modelos/resultados.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Resultados[]> {
      return this.http.get<Resultados[]>(`${environment.url_gateway}/resultados`);    
    }
  eliminar(id:string){
    return this.http.delete<Resultados>(`${environment.url_gateway}/resultados/${id}`,);
    }
}