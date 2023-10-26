import express from "express";
import { ProjetDAO } from "../dao/ProjetDAO.js";
import { Projet } from "../models/Projet.js";

const routeProjet = express.Router();
const projetDAO = new ProjetDAO();

//READ
routeProjet.get("/", (req, res) => {
  res.status(200).json(projetDAO.getAll());
});

// READ A SPECIFIC ID
routeProjet.get("/:id",(req,res)=>{
    let projet = projetDAO.findProjet(req.params.id)
    if(projet == undefined) {
        res.status(404).json({code: 404, message: "aucun todo trouvé avec cet id"});
    }

    res.json(projet);
})

// CREATE
routeProjet.post("/", (req, res) => {
  const projetData = req.body;
  if (projetData) {
    const newProjet = projetDAO.addProjet(projetData);
    res.status(201).json({ projet: newProjet });
  } else {
    res
      .status(400)
      .json({ message: "problème pour l'ajout de nouveau projet !!" });
  }
});

//DELETE
routeProjet.delete("/:id", (req, res) => {
  const projetId = req.params.id;
  projetDAO.deleteProjet(projetId);
  res.status(200).json({ message: "le projet a bien été supprimé !!" });
});

// UPDATE
routeProjet.put("/:id", (req, res) => {
  const projetId = req.params.id;
  const { titre, details, etat, dateDeDebut, dateDeFin } = req.body;
  if (req.params.id !== id) {
    res.sendStatus(409);
  } else {
    let projet = new Projet(id, titre, details, etat, dateDeDebut, dateDeFin);

    projetDAO.updateProjet(projet)
      ? res.sendStatus(200)
      : res
          .status(400)
          .json({
            code: 400,
            message: "problème lors de la mise à jour du projet !",
          });
  }
});

export default routeProjet;
