import { Component, OnInit } from '@angular/core';
import { PortofolioService } from 'src/app/Servicios/portofolio.service';

@Component({
  selector: 'app-card-links',
  templateUrl: './card-links.component.html',
  styleUrls: ['./card-links.component.css']
})
export class CardLinksComponent implements OnInit {
  miPortfolio: any;
  constructor(private datosPortfolio: PortofolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio= data;
    });
  }

}
