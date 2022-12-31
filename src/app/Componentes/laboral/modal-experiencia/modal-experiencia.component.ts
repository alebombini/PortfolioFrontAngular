import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup;
  empresa: String ="";
  logo: String ="";
  cargo: String ="";
  descripcion:  String ="";
  inicio:  String ="";
  fin:  String ="";
  esTrabajoActual: boolean;
  personaId: number = 1;
  
  
constructor(private formBuilder: FormBuilder, private expeService: ExperienciaService) {
//creo el grupo de controles para el formulario
  this.form= this.formBuilder.group({
    inicio:['',[Validators.required]],
    fin:['', [Validators.minLength(3)]],
    empresa: ['',[Validators.required, Validators.minLength(2) ]],
    logo:['',[Validators.required]],
    cargo: ['',[Validators.required, Validators.minLength(2) ]],
    descripcion:['',[Validators.required, Validators.minLength(2)]],
   
    
  })
}

  ngOnInit(): void {
  }

 //decalarar para las validaciones los datos que cargo en el formulario
 get Empresa(){
  return this.form.get("empresa");
}
get Logo(){
  return this.form.get("logo");
}
 get Cargo(){
  return this.form.get("cargo");
}
get Descripcion(){
  return this.form.get("descripcion");
}
 get Inicio(){
  return this.form.get("inicio");
}
get Fin(){
  return this.form.get("fin");
}


//validaciones
get EmpresaValid(){
  return this.Empresa.touched && !this.Empresa.valid;
}
get LogoValid(){
  return this.Logo.touched && !this.Logo.valid;
}
get CargoValid(){
  return this.Cargo.touched && !this.Cargo.valid;
}
get DescripcionValid(){
  return this.Descripcion.touched && !this.Descripcion.valid;
}
get InicioValid(){
  return this.Inicio.touched && !this.Inicio.valid;
}
get FinValid(){
  return this.Fin.touched && !this.Fin.valid;

}

onCreate():void{
  const expe = new Experiencia(this.empresa, this.logo, this.cargo, this.descripcion, 
    this.inicio, this.fin);
    this.expeService.save(expe).subscribe(
      data=>{  
    }, () =>{
      alert("Elemento agregado");
      this.limpiar();
      window.location.reload();
    });

}

limpiar():void{
  this.form.reset();
}



}
