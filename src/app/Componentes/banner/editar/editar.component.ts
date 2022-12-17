import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { persona } from 'src/app/model/persona';


@Component({
  selector: 'app-editarBanner',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  persona: persona= new persona("","", "", "","", "", "", "", "","", "", "");
  form: FormGroup;
  personaId: number = 2;
  titulo:String ='';

  constructor(private formBuilder: FormBuilder, private servPersona: PersonaService) {
    this.form= this.formBuilder.group({    
      //inicializo el formulario 
      titulo: ['', [Validators.required, Validators.minLength(5)]],  
   })

   }

  ngOnInit(): void {
  }

  get Titulo(){
    return this.form.get("titulo");
  }

onCreate(): void {
    
    
  }


}
