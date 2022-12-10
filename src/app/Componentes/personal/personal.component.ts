import { Component, OnInit } from '@angular/core';
import { SobreMi } from 'src/app/model/sobre-mi';
import { PortofolioService } from 'src/app/Servicios/portofolio.service';
import { SobreMiService } from 'src/app/Servicios/sobre-mi.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  //sobreMi: SobreMi[]=[];
  sobreMi: SobreMi= new SobreMi("", "");
  constructor(private sobremiService : SobreMiService) { }

  ngOnInit(): void {
    this.sobremiService.getById(2).subscribe(data =>{
      this.sobreMi=data});

   /*   
     this.sobremiService.getSobreMi().subscribe(data => {
  this.sobreMi=data;
 }); */
  }



}
