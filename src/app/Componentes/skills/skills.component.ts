import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/Servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skills: Skills[]=[];    //se llama al modelo que es un array

  constructor(private servSkills: SkillsService) { }

  ngOnInit(): void {
    this.cargarSkills();
   
  }

  cargarSkills():void{
    this.servSkills.traer().subscribe(data => {
      this.skills=data;
    });
  }

delete(id:number){
  if(id != undefined){
    this.servSkills.delete(id).subscribe(
     _data=>  {
      }, ()  =>{
        alert("Elemento agregado")
        this.cargarSkills(); 
      }
    )
  }
}


// este seria el codigo correcto, pero no me funciona(lo elimina y ejecuta el error)
/*  delete(id:number){
    if(id != undefined){
      this.servSkills.delete(id).subscribe(
        data =>{
          alert("Eliminado correctamente");
          this.cargarSkills();  
      }, err =>{
        alert("No se puede eliminar skill");
      });
    }}*/


  }



