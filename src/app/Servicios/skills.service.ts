import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url='http://localhost:8080/skills/';
  
  constructor(private httpClient:HttpClient) { }

  public traer():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.url + 'traer');
  }
  public detail(id:number):Observable<Skills>{
    return this.httpClient.get<Skills>(this.url + `detail/${id}`);
  }

  public crear(Skills: Skills):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', Skills);
  }
  public edit(id: number, Skills: Skills):Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, Skills);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
