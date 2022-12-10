export class SobreMi {
    id?: number;
    personaId?: number;
    presentacion: String;
    urlVideo: String;

    constructor(presentacion: String, urlVideo: String){
        this.presentacion= presentacion;
        this.urlVideo= urlVideo;

    }

}
