import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Projet } from "../../model/Projet";
import { addProjet, setFormMode } from "./projetSlice";

const AddProjectForm = () => {
  const dispatch = useDispatch();
  const formMode = useSelector((state) => state.projets.formMode);

  const titreRef = useRef();
  const detailsRef = useRef();
  const etatRef = useRef();
  const dateDeDebutRef = useRef();
  const dateDeFinRef = useRef();

  // on ajoute un nouveau projet
  const handleAddSubmission = async (e) => {
    e.preventDefault();
    const newProjet = new Projet(
      titreRef.current.value,
      detailsRef.current.value,
      etatRef.current.value,
      dateDeDebutRef.current.value,
      dateDeFinRef.current.value
    );

    if (newProjet !== undefined) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:3000/projets",
          newProjet
        );
        if (response.status !== 201) {
          throw new Error(
            "Le POST du formulaire d'ajout de projet à été un echec "
          );
        }

        const data = await response.json();

        // l'id est généré par le back-end
        dispatch(addProjet(newProjet));
        dispatch(setFormMode(""));
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <h3>Ajouter</h3>

      <form action="#" onSubmit={handleAddSubmission}>
        <div>
          <label htmlFor="titre">titre</label>
          <label htmlFor="details">details</label>
          <label htmlFor="etat">etat</label>
          <label htmlFor="dateDeDebut">dateDeDebut</label>
          <label htmlFor="dateDeFin">dateDeFin</label>
        </div>

        <div>
          <input type="text" name="titre" ref={titreRef} />
          <input type="text" name="details" ref={detailsRef} />
          {/* <input type="text" name="etat" ref={etatRef} /> */}

          <select name="etat" ref={etatRef}>
            <option value="">état du projet</option>
            <option value="Non débuté">Non débuté</option>
            <option value="En cours">En cours</option>
            <option value="En attente">En attente</option>
            <option value="Terminé">Terminé</option>
          </select>

          <input type="text" name="dateDeDebut" ref={dateDeDebutRef} />
          <input type="text" name="dateDeFin" ref={dateDeFinRef} />
        </div>

        <div>
          <button>Ajout</button>
        </div>
      </form>
    </>
  );
};
export default AddProjectForm;
