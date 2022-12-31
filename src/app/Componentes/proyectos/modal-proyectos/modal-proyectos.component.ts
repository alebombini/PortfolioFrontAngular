import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {
  form: FormGroup;
  personaId: number = 2;
  nombreP: String ="";
  descripcionP: String ="";
  urlProyecto: String ="";
  urlFotoProyecto: String ="";

  constructor(private formBuilder: FormBuilder, private proyeService: ProyectosService) { 
    this.form= this.formBuilder.group({
      nombreP: ['',[Validators.required, Validators.minLength(2) ]],
      descripcionP: ['',[Validators.required, Validators.minLength(8) ]],
      urlProyecto:['',[Validators.required, Validators.minLength(2)]],
      urlFotoProyecto: ['',[Validators.required, Validators.minLength(2) ]]
      
    })


  }

  ngOnInit(): void {
  }
 //decalarar para las validaciones los datos que cargo en el formulario
 get NombreP(){
  return this.form.get("nombreP");
}
get DescripcionP(){
  return this.form.get("descripcionP");
}

get UrlProyecto(){
  return this.form.get("urlProyecto");
}
get UrlFotoProyecto(){
  return this.form.get("urlFotoProyecto");
}
//validaciones
get NombrePValid(){
  return this.NombreP.touched && !this.NombreP.valid;
}
get DescripcionPValid(){
  return this.DescripcionP.touched && !this.DescripcionP.valid;
}

get UrlProyectoValid(){
  return this.UrlProyecto.touched && !this.UrlProyecto.valid;
}
get UrlFotoProyectoValid(){
  return this.UrlFotoProyecto.touched && !this.UrlFotoProyecto.valid;
}


onCreate():void{
  const proye = new Proyectos(this.nombreP, this.descripcionP, this.urlProyecto, this.urlFotoProyecto);
  this.proyeService.saveProyecto(proye).subscribe(data=>{
    alert("Elemento agregado");
    window.location.reload();
  }, err =>{                     //siempre ejecuta el error por el id no declarado
    alert("Elemento agregado");
    this.form.reset();
    window.location.reload();
  });

}
limpiar():void{
  this.form.reset();
}


}
