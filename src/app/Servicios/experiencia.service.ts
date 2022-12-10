import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url='http://localhost:8080/experiencia/';


  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url + 'traer');
  }
  public detail(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `detail/${id}`);
  }

  public saveExperiencia(Estudios: Experiencia):Observable<any>{
    return this.http.post<any>(this.url + 'crear', Experiencia);
  }
  public editExperiencia(id: number, Experiencia: Experiencia):Observable<any>{
    return this.http.put<any>(this.url + `edit/${id}`, Experiencia);
  }
  public deleteExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}
