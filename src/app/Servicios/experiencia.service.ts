import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url='https://portfolio-pi5g.onrender.com/experiencia/';


  constructor(private http:HttpClient) { }

  public get():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url + 'traer');
  }
  public detail(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `detail/${id}`);
  }

  public save(Experiencia: Experiencia):Observable<any>{
    return this.http.post<any>(this.url + 'crear', Experiencia);
  }
  public edit(id: number, Experiencia: Experiencia):Observable<any>{
    return this.http.put<any>(this.url + `edit/${id}`, Experiencia);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}
