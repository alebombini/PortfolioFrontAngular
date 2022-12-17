import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/Servicios/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: Estudios[]= [];

  constructor(private estudiosService: EstudiosService) { }

  ngOnInit(): void {
    this.cargarEstudios();
    
  }
public cargarEstudios():void {
  this.estudiosService.getEstudios().subscribe(data => {
    this.estudios=data;
  });

}
delete(id?:number){
  if(id != undefined){
    this.estudiosService.delete(id).subscribe(
      data =>{
        alert("Eliminado") ;  //no entiendo porque esto no se ejecuta
        this.cargarEstudios(); //ni esto
      }, err =>{                 //pongo este mensaje aca porque esto se ejecuta siempre
        alert("Eliminado correctamente") 
        this.cargarEstudios();
      }
    )
  }
}


}
