import { Component, OnInit } from '@angular/core';
import { PortofolioService } from 'src/app/Servicios/portofolio.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {
  experienciaLista: any;
  datosGrales: any;
  responsabilidades: any;
  constructor(private datosPortfolio: PortofolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experienciaLista=data.experiencia;
      this.datosGrales= data;
    })

  }

}
