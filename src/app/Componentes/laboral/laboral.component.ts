import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {
  experiencia: Experiencia[]=[];    //se llama al modelo que es un array
  
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
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
