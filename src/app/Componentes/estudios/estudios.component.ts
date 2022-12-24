import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { AutenticacionService } from 'src/app/Servicios/autenticacion.service';
import { EstudiosService } from 'src/app/Servicios/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: Estudios[]= [];
  modoEdit: any;

  constructor(private estudiosService: EstudiosService, private autService: AutenticacionService) { }

  ngOnInit(): void {
    this.cargarEstudios();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }

    
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
      }, () =>{                 //pongo este mensaje aca porque esto se ejecuta siempre
        alert("Eliminado correctamente") 
        this.cargarEstudios();
      }
    )
  }
}


}
