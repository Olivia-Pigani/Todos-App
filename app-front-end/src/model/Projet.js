export class Projet {

    // l'id est généré par le back end
    constructor(titre,details,etat,dateDeDebut,dateDeFin){
        this.titre=titre
        this.details=details
        this.etat=etat
        this.dateDeDebut=dateDeDebut
        this.dateDeFin=dateDeFin
    }
}