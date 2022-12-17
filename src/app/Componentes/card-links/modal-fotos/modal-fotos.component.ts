import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { persona } from 'src/app/model/persona';

@Component({
  selector: 'app-modal-fotos',
  templateUrl: './modal-fotos.component.html',
  styleUrls: ['./modal-fotos.component.css']
})
export class ModalFotosComponent implements OnInit {
  form: FormGroup;
  urlFoto: String = '';

  
  constructor(private formBuilder: FormBuilder, private persoServ: PersonaService ) {
    //creo el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      urlFoto:['',[Validators.required, Validators.minLength(3)]],
    })
   }

  ngOnInit(): void {
  }

get UrlFoto(){
  return this.form.get("urlFoto");
}
get UrlFotoValid(){
  return this.UrlFoto.touched && !this.UrlFoto.valid;
/* 
onCreate(): void {
  
 this.persoServ.edit(UrlFoto).subscribe(data=>{
    alert("Elemento agregado");
    //this.form.reset();
    window.location.reload;
  }, err =>{
    alert("fallo");
    window.location.reload;
  }
  )*/
}



}
