import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Moeda {
  preco: number;
  data: string;
  hora: string;
}

@Injectable({
  providedIn: 'root'
})
export class CotacaoDolarService {

  private apiUrl = 'http://localhost:8080/cotacao-dolar/moeda';

  constructor(private http: HttpClient) {}

  getCotacoesPeriodo(data1: string, data2: string): Observable<Moeda[]> {
    return this.http.get<Moeda[]>(`${this.apiUrl}/periodo/${data1}/${data2}`);
  }

  getCotacaoAtual(): Observable<Moeda[]> {
    return this.http.get<Moeda[]>(`${this.apiUrl}/atual`);
  }

  getCotacoesMenoresQueAtual(data1: string, data2: string): Observable<Moeda[]> {
    return this.http.get<Moeda[]>(`${this.apiUrl}/menores/${data1}/${data2}`);
  }

  getCotacoesMenoresPeriodo(data1: string, data2: string): Observable<Moeda[]> {
    return this.http.get<Moeda[]>(`${this.apiUrl}/menores/${data1}/${data2}`);
  }

}
