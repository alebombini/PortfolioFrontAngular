import { Component, OnInit } from '@angular/core';
import { fotolinks } from 'src/app/model/fotolinks';
import { AutenticacionService } from 'src/app/Servicios/autenticacion.service';
import { FotolinksService } from 'src/app/Servicios/fotolinks.service';


@Component({
  selector: 'app-card-links',
  templateUrl: './card-links.component.html',
  styleUrls: ['./card-links.component.css']
})
export class CardLinksComponent implements OnInit {
 
  fotolinks: fotolinks[] = [];
  modoEdit: any;

  constructor(private fotolinksService: FotolinksService, 
    private autService: AutenticacionService ) { }

  ngOnInit(): void {
    this.cargarFotolinks();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }
   

  }
  cargarFotolinks():void{
    this.fotolinksService.list().subscribe(data => {
      this.fotolinks=data;
    });
  }

}
