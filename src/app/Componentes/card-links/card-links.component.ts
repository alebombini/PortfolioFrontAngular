import { Component, OnInit } from '@angular/core';
import { fotolinks } from 'src/app/model/fotolinks';
import { FotolinksService } from 'src/app/Servicios/fotolinks.service';


@Component({
  selector: 'app-card-links',
  templateUrl: './card-links.component.html',
  styleUrls: ['./card-links.component.css']
})
export class CardLinksComponent implements OnInit {
 
  fotolinks: fotolinks[] = [];

  constructor(private fotolinksService: FotolinksService) { }

  ngOnInit(): void {
    this.cargarFotolinks();
   

  }
  cargarFotolinks():void{
    this.fotolinksService.list().subscribe(data => {
      this.fotolinks=data;
    });
  }

}
