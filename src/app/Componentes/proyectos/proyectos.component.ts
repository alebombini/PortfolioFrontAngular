import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 proyectos: Proyectos[]=[];

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
   this.cargarProyectos();
  }

  cargarProyectos():void{
    this.proyectosService.getProyectos().subscribe(data => {
      this.proyectos = data;
      
    });
  }
}
