import { Component, OnInit } from '@angular/core';
import { SobreMi } from 'src/app/model/sobre-mi';
import { SobreMiService } from 'src/app/Servicios/sobre-mi.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AutenticacionService } from 'src/app/Servicios/autenticacion.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  sobreMi: SobreMi []=[];
  modoEdit: any;
  
  constructor(private sobremiService : SobreMiService, private _sanitizer: DomSanitizer, 
    private autService: AutenticacionService) { }

  ngOnInit(): void {
   
this.cargarSobreMi();
if (sessionStorage.getItem('currentUser') == "null"){
  this.modoEdit = false;
}else if (sessionStorage.getItem('currentUser') == null){
  this.modoEdit = false;
}else {
  this.modoEdit = true;
}


  }
  cargarSobreMi():void{
    this.sobremiService.getSobreMi().subscribe(data => {
      this.sobreMi=data ;
    });
  }

getVideoIframe(url: String) {                //para que se pueda ver el video
  var video, results;
  if (url === null){
    return '';
  }
results = url.match('[\\?&]v=[^&#*]');           //para que se pueda ver el video
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
