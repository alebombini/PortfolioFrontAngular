export class Estudios {
    id?: number;
    personaId?: number;
    titulo: String;
    institucion: String;
    inicio: String;
    fin: String;


     constructor(titulo: String, institucion: String, inicio: String, fin: String){
        
        this.titulo= titulo;
        this.institucion= institucion;
        this.inicio= inicio;
        this.fin= fin;

     }
}
