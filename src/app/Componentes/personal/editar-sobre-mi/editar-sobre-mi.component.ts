import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SobreMi } from 'src/app/model/sobre-mi';
import { SobreMiService } from 'src/app/Servicios/sobre-mi.service';

@Component({
  selector: 'app-editar-sobre-mi',
  templateUrl: './editar-sobre-mi.component.html',
  styleUrls: ['./editar-sobre-mi.component.css']
})
export class EditarSobreMiComponent implements OnInit {
  form: FormGroup;
  sobreMi: SobreMi = null;
  personaId: number = 1;          //le pongo id fijo porque solo tendre 1 persona
  id: number = 1;                //le pongo id fijo porque solo tendre 1 info personal
  //presentacion: string= "";
  //urlVideo: String ="";
  


  constructor(private formBuilder: FormBuilder, private servSobreMi: SobreMiService, 
    private activatedRoute: ActivatedRoute, private router: Router) { 
      this.form= this.formBuilder.group({    //inicializo el formulario 
        urlVideo:['', [Validators.minLength(5) ]],
        presentacion:['', [Validators.required, Validators.minLength(5) ]],
  })

    }
//metodos para las validaciones
get Presentacion(){
  return this.form.get("presentacion");
    }
get UrlVideo(){
  return this.form.get("urlVideo");
    }

  ngOnInit(): void {
    this.cargarInfo(); 
    const id = this.activatedRoute.snapshot.params['id'];
    this.servSobreMi.getById(this.id).subscribe(
      data => {
        this.sobreMi = data;
      }, () =>{
        
      }
    )
  }
  

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id']; 
    this.servSobreMi.editSobreMi(this.id, this.sobreMi).subscribe(
      data => {
        alert("la informacion fue modificada");
        window.location.reload();
      }, err =>{
        alert("error");
        this.router.navigate(['']);
      }
    )
   

  }
//metodo para traer la info de la ddbb
  cargarInfo(){
    this.servSobreMi.getById(this.id).subscribe(data => {   
      this.sobreMi = data;
    });
  }
 


}
