export class Proyectos {
    id: number;
    personaId: number;
    nombreP: String;
    descripcionP: String;
    urlProyecto: String;
    urlFotoProyecto: String;

    constructor(nombreP: String, descripcionP: String, urlProyecto: String, urlFotoProyecto: String){
        this.nombreP= nombreP;
        this.descripcionP = descripcionP;
        this.urlProyecto= urlProyecto;
        this.urlFotoProyecto= urlFotoProyecto;
    }

        
}
