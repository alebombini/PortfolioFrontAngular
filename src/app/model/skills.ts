export class Skills {
     id: number;
     personaId: number;
     nombreS: String;
     nivel: number;

     constructor(personaId: number, nombreS: String, nivel:number){
      
        this.personaId = personaId;
        this.nombreS = nombreS;
        this.nivel = nivel;

     }

}
