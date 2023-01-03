import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
url='https://portfolio-pi5g.onrender.com/estudios/';


  constructor(private http:HttpClient) { }
    
    public getEstudios():Observable<Estudios[]>{
      return this.http.get<Estudios[]>(this.url + 'traer');
    }
    public detail(id:number):Observable<Estudios>{
      return this.http.get<Estudios>(this.url + `detail/${id}`);
    }

    public save(Estudios: Estudios):Observable<any>{
      return this.http.post<any>(this.url + 'crear', Estudios);
    }
    public edit(id: number, Estudios: Estudios):Observable<any>{
      return this.http.put<any>(this.url + `edit/${id}`, Estudios);
    }
    public delete(id:number):Observable<any>{
      return this.http.delete<any>(this.url + `delete/${id}`);
    }
  

  
}
