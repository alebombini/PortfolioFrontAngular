import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { persona } from 'src/app/model/persona';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editarBanner',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  persona: persona= null;
  form: FormGroup;
  id: number = 1; // inicializo en 1 porque solo tendre 1 persona

  constructor(private formBuilder: FormBuilder, private servPersona: PersonaService, 
    private activatedRoute: ActivatedRoute, private router: Router) {
    this.form= this.formBuilder.group({    
      //inicializo el formulario 
      titulo: ['', [Validators.required, Validators.minLength(5)]],  
   })

   }

  ngOnInit(): void {
    this.cargarInfo(); 
    const id = this.activatedRoute.snapshot.params['id'];
    this.servPersona.getPersona().subscribe(
      data => {
        this.persona = data;
      }, () =>{
        
      }
    )
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id']; 
    this.servPersona.edit(this.id, this.persona).subscribe(
      data => {
        alert("la informacion fue modificada");
        window.location.reload();
      }, err =>{
        alert("error");
       
      }
    )
  }
  
//metodo para traer la info de la ddbb
cargarInfo(){
  this.servPersona.getPersona().subscribe(data => {   
    this.persona = data;
  });
}

}
