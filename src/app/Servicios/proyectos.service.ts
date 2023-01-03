import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url='https://portfolio-pi5g.onrender.com/proyectos/';


  constructor(private http:HttpClient) { }

  public getProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.url + 'traer');
  }
  public detail(id:number):Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url + `detail/${id}`);
  }

  public saveProyecto(Proyectos: Proyectos):Observable<any>{
    return this.http.post<any>(this.url + 'crear', Proyectos);
  }
  public editProyecto(id: number, Proyectos: Proyectos):Observable<any>{
    return this.http.put<any>(this.url + `edit/${id}`, Proyectos);
  }
  public deleteProyecto(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}
