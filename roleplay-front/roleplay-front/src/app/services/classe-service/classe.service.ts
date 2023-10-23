import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classe } from '../../model/classe/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private baseUrl = 'http://localhost:8080/api/v1/classe';

  constructor(private httpClient: HttpClient) { }

  getAllClasses(): Observable<Classe[]> {
    return this.httpClient.get<Classe[]>(`${this.baseUrl}`);
  }
}
