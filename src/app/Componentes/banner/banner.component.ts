import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { AutenticacionService } from 'src/app/Servicios/autenticacion.service';
import { PersonaService } from 'src/app/Servicios/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: persona= new persona("","", "", "","", "", "", "", "","");
  modoEdit: any;

  constructor(private personaService: PersonaService, private autService: AutenticacionService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data;});
    
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }


  }

}
