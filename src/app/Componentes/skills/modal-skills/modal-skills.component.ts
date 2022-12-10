import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from 'src/app/Servicios/skills.service';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css']
})

export class ModalSkillsComponent implements OnInit {
  form: FormGroup;
  nombreS: string='';
  nivel: number= 0;
  Skills: any;

 
  constructor(private formBuilder: FormBuilder, private servSkills:SkillsService) { 

  //creo el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      nombreS: ['',[Validators.required]],
      nivel:['',[Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }

  ngOnInit(): void {
  }

  //decalarar para las validaciones
get NombreS(){
  return this.form.get("nombreS");
}
get Nivel(){
  return this.form.get("nivel");
}

//validaciones
get NombreSValid(){
  return //this.NombreS.touched && !this.NombreS.valid;
}

get NivelValid(){
  return //this.Nivel.touched && !this.Nivel.valid;
}

onCreate():void{
  const sk = new this.Skills(this.NombreS, this.Nivel);
  this.servSkills.crear(sk).subscribe(data=>{
    alert("Elemento agregado");
    window.location.reload;
  }, err =>{
    alert("No se pudo agregar el elemento");
    this.form.reset();
  });

}
limpiar():void{
  this.form.reset();
}


}
