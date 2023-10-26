import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Projet } from "../../model/Projet";
import { deleteProjet, setFormMode } from "./projetSlice";

const DeleteProjectForm = () => {
  const dispatch = useDispatch();
  const formMode = useSelector((state) => state.projets.formMode);
  const selectedProjet = useSelector((state) => state.projets.selectedProjet);

  const titreRef = useRef();
  const detailsRef = useRef();
  const etatRef = useRef();
  const dateDeDebutRef = useRef();
  const dateDeFinRef = useRef();

  // on delete un  projet
  const handleDeleteSubmission = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `http://127.0.0.1:3000/projets/${selectedProjet.id}.json`
      );

      if (!response.ok) {
        throw new Error(" problème lors du delete du projet !");
      }

      const data = response.json();
      dispatch(deleteProjet(selectedProjet));
      dispatch(setFormMode(""));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h3>Suppression</h3>

      <form action="#" onSubmit={handleDeleteSubmission}>
        <div>
          <label htmlFor="titre">titre</label>
          <label htmlFor="details">details</label>
          <label htmlFor="etat">etat</label>
          <label htmlFor="dateDeDebut">dateDeDebut</label>
          <label htmlFor="dateDeFin">dateDeFin</label>
        </div>

        <div>
          <input type="text" name="titre" ref={titreRef} disabled />
          <input type="text" name="details" ref={detailsRef} disabled />
          <input type="text" name="etat" ref={etatRef} disabled />
          <input type="text" name="dateDeDebut" ref={dateDeDebutRef} disabled />
          <input type="text" name="dateDeFin" ref={dateDeFinRef}  disabled/>
        </div>

        <div>
          <button>Suppression</button>
        </div>
      </form>
    </>
  );
};
export default DeleteProjectForm;
