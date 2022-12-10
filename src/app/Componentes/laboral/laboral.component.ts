import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {
  experiencia: Experiencia[]=[]
  
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }
  cargarExperiencia(): void{
    this.experienciaService.getExperiencia().subscribe(data => {
      this.experiencia=data;
    });

  }
}
