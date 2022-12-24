import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { AutenticacionService } from 'src/app/Servicios/autenticacion.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {
  experiencia: Experiencia[]=[];    //se llama al modelo que es un array
  modoEdit: any;

  constructor(private experienciaService: ExperienciaService, private autService: AutenticacionService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }


  }

  cargarExperiencia(): void{
    this.experienciaService.get().subscribe(data => {
      this.experiencia=data;
    });

  }
  delete(id:number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
       data=>  {
        //  this.cargarExperiencia();  esto no me lo ejecuta 
        }, ()  =>{
          alert("Elemento eliminado")
          this.cargarExperiencia(); 
        }
      )
    }
  }




}
