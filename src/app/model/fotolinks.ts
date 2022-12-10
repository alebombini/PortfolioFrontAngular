export class fotolinks {
 id?: number;
 personaId?: number;
 seccion: string;
 link: string;
 url_foto: string;

constructor(personaID: number, link: string, seccion: string, url_foto: string ){

    //this.personaId= 2;
    this.seccion= seccion;
    this.link= link;
    this.url_foto= url_foto;

}

}

