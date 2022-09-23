import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortofolioService {

  constructor(private http: HttpClient) { }
  
  obtenerDatos(): Observable<any>{
   return this.http.get('./assets/Data/data.json'); 
  }
  obtenerDatosIngles(): Observable<any>{
    return this.http.get('./assets/Data/data-ingles.json');
  }
  /*
  if idioma = español{
  return this.http.get('./assets/Data/data.json');
  } else {
    return this.http.get('./assets/Data/data-ingles.json'); 
  }
  */



}
