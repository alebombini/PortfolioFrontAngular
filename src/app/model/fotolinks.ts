export class fotolinks {
 id: number;
 personaId: number;
 seccion: string;
 link: string;
 url_foto: string;

constructor(link: string, seccion: string, url_foto: string ){

    this.seccion= seccion;
    this.link= link;
    this.url_foto= url_foto;

}

}

