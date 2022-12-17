import { Component, OnInit } from '@angular/core';
import { SobreMi } from 'src/app/model/sobre-mi';
import { SobreMiService } from 'src/app/Servicios/sobre-mi.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  sobreMi: SobreMi []=[];
  
  constructor(private sobremiService : SobreMiService, private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
   
this.cargarSobreMi();

  }
  cargarSobreMi():void{
    this.sobremiService.getSobreMi().subscribe(data => {
      this.sobreMi=data ;
    });
  }

getVideoIframe(url: String) {
  var video, results;
  if (url === null){
    return '';
  }
results = url.match('[\\?&]v=[^&#*]');
video = (results === null) ? url : results[1];
return this._sanitizer.bypassSecurityTrustResourceUrl
('https://www.youtube.com/embed/' + video)
}
delete(id:number){
  if(id != undefined){
    this.sobremiService.deleteSobreMi(id).subscribe(
     _data=>  {
        this.cargarSobreMi();  //esto no me lo ejecuta 
      }, err  =>{
        alert("Elemento eliminado")
        this.cargarSobreMi(); 
      }
    )
  }

}
}
