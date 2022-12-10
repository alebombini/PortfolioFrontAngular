import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost:4200/autenticacion/login";
  currentUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient){
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
    
  }
IniciarSesion(credenciales:any):Observable<any>{ //esta funcion es la que devuelve el token
var httpOptions = {                   //esto lo agrega Josman en el video 72 para login sin jwt
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  }),

}


return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
  sessionStorage.setItem('currentUser', JSON.stringify(data));
  this.currentUserSubject.next(data);
  return data;
}));
}
  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }

}
