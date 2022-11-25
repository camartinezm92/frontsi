import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Votos } from '../modelos/votos.model';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Votos[]> {
    return this.http.get<Votos[]>(`${environment.url_gateway}/votos`);
  }
  eliminar(id: string) {
    return this.http.delete<Votos>(`${environment.url_gateway}/votos/${id}`,);
  }
  getVotos(id: string): Observable<Votos> {
    return this.http.get<Votos>(`${environment.url_gateway}/votos/${id}`);
  }
  crear(id: string,elVotos: Votos) {
    return this.http.post(`${environment.url_gateway}/votos/mesas/${id}`, elVotos);
  }
  editar(id:string,id2:string,elVotos: Votos) {
    return this.http.put(`${environment.url_gateway}/votos/${id}/mesas/${id2}`, elVotos);
  }
  relacionar(id: string,id2: string) {
    return this.http.put(`${environment.url_gateway}/votos/${id2}/candidatos/${id}`,null);
  }
  votostot(id_mesa: string) {
    return this.http.get(`${environment.url_gateway}/votos//tot/${id_mesa}`);
  }
}