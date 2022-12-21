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
  titulo:String ='';
  id: number = 2;

  constructor(private formBuilder: FormBuilder, private servPersona: PersonaService, 
    private activatedRoute: ActivatedRoute, private router: Router) {
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
  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id']; 
    this.servPersona.edit(this.id, this.persona).subscribe(
      data => {
        alert("la informacion fue modificada");
        this.router.navigate(['']);
      }, err =>{
        alert("error");
        this.router.navigate(['']);
      }
    )
  }
  


}
