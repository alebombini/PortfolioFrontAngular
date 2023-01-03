import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fotolinks } from '../model/fotolinks';

@Injectable({
  providedIn: 'root'
})
export class FotolinksService {
  URL = 'https://portfolio-pi5g.onrender.com/fotoLinks/';
  constructor(private http: HttpClient) { }

  public list():Observable<fotolinks[]>{
    return this.http.get<fotolinks[]>(this.URL + 'traer');
  }
  public detail(id:number):Observable<fotolinks>{
    return this.http.get<fotolinks>(this.URL + `detail/${id}`);
  }

  public saveFotoLinks(fotolinks: fotolinks):Observable<any>{
    return this.http.post<any>(this.URL + 'crear', fotolinks);
  }
  public editFotoLinks(id: number, fotolinks: fotolinks):Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, fotolinks);
  }
  public deleteFotoLinks(id:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }


}
