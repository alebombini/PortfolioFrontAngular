export class Proyectos {
    id: number;
    personaId: number;
    nombreP: String;
    urlProyecto: String;
    urlFotoProyecto: String;

    constructor(nombreP: String, urlProyecto: String, urlFotoProyecto: String){
        this.nombreP= nombreP;
        this.urlProyecto= urlProyecto;
        this.urlFotoProyecto= urlFotoProyecto;
    }

        
}
