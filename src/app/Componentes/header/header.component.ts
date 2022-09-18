import { Component, OnInit } from '@angular/core';
import { PortofolioService } from 'src/app/Servicios/portofolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private datosPortfolio: PortofolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();
  }

}
