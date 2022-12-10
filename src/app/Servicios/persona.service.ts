import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';


  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');

  }
  public findPersona(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + 'traer');
  }
  public crear(persona: persona):Observable<any>{
    return this.http.post<any>(this.URL + 'crear', persona);
  }
  public edit(id: number, persona: persona):Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, persona);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
  

}
