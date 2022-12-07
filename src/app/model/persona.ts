export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    clave: String;
    titulo: String;
    fechaNac: String;
    email: String;
    UrlGithub: String;
    whatsapp: String;
    UrlTelegram: String;
    UrlLinkedIn: String;


    constructor(nombre: String, apellido: String, clave: String, titulo: String,
        fechaNac: String, email: String, UrlGithub: String, whatsapp: String, UrlTelegram: String,
        UrlLinkedIn: String) {
      
       this.nombre = nombre;
       this.apellido = apellido;
       this.clave = clave;
       this.titulo = titulo;
       this.fechaNac = fechaNac;
       this.email = email;
       this.UrlGithub = UrlGithub;
       this.whatsapp = whatsapp;
       this.UrlTelegram = UrlTelegram;
       this.UrlLinkedIn = UrlLinkedIn;


        }
}
