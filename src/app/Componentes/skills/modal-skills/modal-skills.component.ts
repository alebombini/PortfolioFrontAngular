import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { SkillsService } from 'src/app/Servicios/skills.service';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css']
})

export class ModalSkillsComponent implements OnInit {
  form: FormGroup;
  personaId: number = 1;
  nombreS: string='';
  nivel: number= 0;
  
  
 
  constructor(private formBuilder: FormBuilder, private servSkills:SkillsService) { 

  //creo el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      nombreS: ['',[Validators.required, Validators.minLength(2) ]],
      nivel:['',[Validators.required, Validators.min(1), Validators.max(100)]]
    })
  }

  ngOnInit(): void {
  }

  //decalarar para las validaciones los datos que cargo en el formulario
get NombreS(){
  return this.form.get("nombreS");
}
get Nivel(){
  return this.form.get("nivel");
}

//validaciones
get NombreSValid(){
  return this.NombreS.touched && !this.NombreS.valid;
}

get NivelValid(){
  return this.Nivel.touched && !this.Nivel.valid;
}

onCreate():void{
  const sk = new Skills(this.personaId, this.nombreS, this.nivel);
  this.servSkills.crear(sk).subscribe(data=>{
  }, err =>{                     //siempre ejecuta el mensaje de error 
   // this.form.reset();
   window.location.reload();
   
  });

}
limpiar():void{
  this.form.reset();
}

}
