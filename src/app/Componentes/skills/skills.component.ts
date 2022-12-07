import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { PortofolioService } from 'src/app/Servicios/portofolio.service';
import { SkillsService } from 'src/app/Servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  miPortfolio: any;
  skills: Skills[]=[];    //se llama al modelo que es un array

  constructor(private servSkills: SkillsService) { }

  ngOnInit(): void {
    this.cargarSkills();
   // this.servSkills.traer().subscribe(data => {this.skills = data; })
  }

  cargarSkills():void{
    this.servSkills.traer().subscribe(data => {
      this.skills=data
    });
  }

}
