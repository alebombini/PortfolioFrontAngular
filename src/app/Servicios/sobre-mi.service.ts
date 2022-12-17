import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SobreMi } from '../model/sobre-mi';

@Injectable({
  providedIn: 'root'
})
export class SobreMiService {
  url='http://localhost:8080/sobremi/';

  constructor(private http:HttpClient) { }
  public getSobreMi():Observable<SobreMi[]>{
    return this.http.get<SobreMi[]>(this.url + 'traer');
  }
  public getById(id:number):Observable<SobreMi>{
    return this.http.get<SobreMi>(this.url + `detail/${id}`);
  }

  public saveSobreMi(SobreMi: SobreMi):Observable<any>{
    return this.http.post<any>(this.url + 'crear', SobreMi);
  }
  public editSobreMi(id: number, SobreMi: SobreMi):Observable<any>{
    return this.http.put<any>(this.url + `edit/${id}`, SobreMi);
  }
  public deleteSobreMi(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `delete/${id}`);
  }

}
