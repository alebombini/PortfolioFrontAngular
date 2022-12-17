import { EstudiosComponent } from "../Componentes/estudios/estudios.component";
import { ModalExperienciaComponent } from "../Componentes/laboral/modal-experiencia/modal-experiencia.component";
import { ProyectosComponent } from "../Componentes/proyectos/proyectos.component";

export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    clave: String;
    titulo: String;
    email: String;
    urlGithub: String;
    whatsapp: String;
    urlTelegram: String;
    urlLinkedIn: String;
    presentacion: String;
    urlVideo: String;
   
    

    constructor(nombre: String, apellido: String, clave: String, titulo: String,
        fechaNac: String, email: String, urlGithub: String, whatsapp: String, urlTelegram: String,
        urlLinkedIn: String, presentacion: String, urlVideo: String) {
      
       this.nombre = nombre;
       this.apellido = apellido;
       this.clave = clave;
       this.titulo = titulo;
       this.email = email;
       this.urlGithub = urlGithub;
       this.whatsapp = whatsapp;
       this.urlTelegram = urlTelegram;
       this.urlLinkedIn = urlLinkedIn;
       this.presentacion = presentacion;
       this.urlVideo = urlVideo;

        }
}
