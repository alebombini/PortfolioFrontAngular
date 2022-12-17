import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/Servicios/estudios.service';

@Component({
  selector: 'app-modal-estudios',
  templateUrl: './modal-estudios.component.html',
  styleUrls: ['./modal-estudios.component.css']
})
export class ModalEstudiosComponent implements OnInit {
  form: FormGroup;
  personaId: number = 2;
  titulo: String = '';
  institucion: String= '';
  inicio: String= '';
  fin: String= '';

  constructor(private estudiosService: EstudiosService, 
    private formBuilder: FormBuilder ) {
  this.form= this.formBuilder.group({    
    //inicializo el formulario 
    titulo: ['', [Validators.required, Validators.minLength(5)]],  
  institucion:['', [Validators.required]],
  inicio:['', [Validators.required]],
  fin:['']})

  }


  ngOnInit(): void {
  }
  get Titulo(){
    return this.form.get("titulo");
  }
  get Institucion(){
    return this.form.get("institucion");
  }
  get Inicio(){
    return this.form.get("inicio");
  }
  get Fin(){
    return this.form.get("fin");
  }

  onCreate(): void {
    const estu = new Estudios(this.personaId, this.titulo, this.institucion, this.inicio, this.fin);
    this.estudiosService.save(estu).subscribe(data=>{
      alert("Elemento agregado");
      //this.form.reset();
      window.location.reload;
    }, err =>{
      alert("fallo");
      window.location.reload;
    }
    )
  }


}
  //este del video de mgb 
/*onCreate(): void {
  const estu = new Estudios( this.titulo, this.institucion, this.inicio, this.fin);
  this.estudiosService.save(estu).subscribe(data =>{
    alert("Estudio creado");
    
  }, err =>{
    alert("fallo");
    window.location.reload;
  })
}*/



