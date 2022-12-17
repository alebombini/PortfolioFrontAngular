export class SobreMi {
    id: number;
    presentacion: String;
    urlVideo: String;
    PersonaId: number;

    constructor(presentacion: String, urlVideo: String, PersonaId: number){
        this.presentacion= presentacion;
        this.urlVideo= urlVideo;
        this.PersonaId = PersonaId;
    }

}
