import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueur } from '../../model/joueur/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  private baseUrl = 'http://localhost:8080/api/v1/joueur';
  private guerrierUrl = 'http://localhost:8080/api/v1/guerrier';

  constructor(private httpClient: HttpClient) { }

  getAllJoueurs(): Observable<Joueur[]> {
    return this.httpClient.get<Joueur[]>(`${this.baseUrl}`);
  }

  getAllGuerriers(): Observable<Joueur[]> {
    return this.httpClient.get<Joueur[]>(`${this.guerrierUrl}`);
  }

  getJoueurById(id: number): Observable<Joueur> {
    return this.httpClient.get<Joueur>(`${this.baseUrl}/${id}`);
  }

  createJoueur(joueur: Joueur): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`,joueur);
  }

  updateJoueur(id: number, joueur: Joueur): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, joueur);
  }
}
