import { Classe } from "./classe";

export class Joueur {
    id: number = 0;
    nom: string = "";
    niveau: number = 0;
    id_classe: number = 0
    classe: Classe = new Classe();

    constructor() {}
}
