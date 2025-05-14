import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private baseUrl = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons';

  constructor(private http: HttpClient) {}

  getCandidatos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/candidates.json`);
  }

  getCandidatoDetalle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/candidates.json`);
  }
}
