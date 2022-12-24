import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { AutenticacionService } from 'src/app/Servicios/autenticacion.service';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 proyectos: Proyectos[]=[];
 modoEdit: any;

  constructor(private proyectosService: ProyectosService, private autService: AutenticacionService) { }

  ngOnInit(): void {
   this.cargarProyectos();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }
  }

  cargarProyectos():void{
    this.proyectosService.getProyectos().subscribe(data => {
      this.proyectos = data;
      
    });
  }
  delete(id:number){
    if(id != undefined){
      this.proyectosService.deleteProyecto(id).subscribe(
       data=>  {
          this.cargarProyectos();  //esto no me lo ejecuta 
        }, err  =>{
          alert("Elemento eliminado")
          this.cargarProyectos(); 
        }
      )
    }
  }





}
