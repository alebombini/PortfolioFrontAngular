import { Component, OnInit } from '@angular/core';
import { PortofolioService } from 'src/app/Servicios/portofolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio: PortofolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio= data;
    });
  }

}
