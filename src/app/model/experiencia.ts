export class Experiencia {
    id: number;
    personaId: number;
    empresa: String;
    logo: String;
    cargo: String;
    descripcion: String;
    inicio: String;
    fin: String;
    esTrabajoActual: Boolean;


     constructor(empresa: String, logo: String, cargo: String, descripcion: String, inicio: String, fin: String){
        this.empresa= empresa;
        this.logo= logo;
        this.cargo= cargo;
        this.descripcion= descripcion;
        this.inicio= inicio;
        this.fin= fin;
        this.esTrabajoActual= this.esTrabajoActual;
        

     }



}
