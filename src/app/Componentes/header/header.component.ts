import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { PortofolioService } from 'src/app/Servicios/portofolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona: persona = new persona("", "", "", "", "", "", "", "", "", "", "","");

  constructor( private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{
      this.persona = data
    });
  }

}
