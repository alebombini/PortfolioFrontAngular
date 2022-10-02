import { Component, OnInit } from '@angular/core';
import { PortofolioService } from 'src/app/Servicios/portofolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  miPortfolio: any;
  skills: any;

  constructor(private datosPortfolio: PortofolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
      this.skills= data.skills;
    })
  }

}
