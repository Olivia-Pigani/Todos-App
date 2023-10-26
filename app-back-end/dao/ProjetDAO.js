import {readFileSync,writeFileSync} from "fs"
import {v4 as uuiv4} from "uuid"
import {resolve} from "path"

export class ProjetDAO {
    constructor(){
        this.file = resolve ("./db/projetsdb.json")
        this.projets=[]
    }


    // pour le fichier json

    readFile(){
        const file = readFileSync(this.file, { encoding: "utf-8" })
        this.projets=JSON.parse(file)
    }

    writeFile(){
        writeFileSync(this.file,JSON.stringify(this.projets))
    }



    // pour le CRUD

    addProjet(projet){
        projet.id=uuiv4()
        this.projets.push(projet)
        this.writeFile()
        return projet
      }
    
      getAll(){
        return this.projets
      }
    
      findProjet(id){
        return this.projets.find((p)=>p.id===id)
      }
    
      updateProjet(projetToUpdate){
        const projet = this.findById(projetToUpdate.id)
        if(projet==undefined){
            return false
        } else {
            projet.titre=projetToUpdate.titre
            projet.details=projetToUpdate.details
            projet.etat=projetToUpdate.etat
            projet.dateDeDebut=projetToUpdate.dateDeDebut
            projet.dateDeFin=projetToUpdate.dateDeFin

        }
    
        this.writeFile()
        return true

      
      }
    
      deleteProjet(id){
        this.projets=this.projets.filter((p)=>p.id!==id)
        this.writeFile()
      }
}