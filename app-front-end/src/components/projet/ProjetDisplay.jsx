import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailProjet from "./DetailProjet";
import { setSelectedProjet, setShowModal } from "./projetSlice";
import Modal from "../../shared/modal/Modal";
import EditProjectForm from "./EditProjectForm";
import DeleteProjectForm from"./DeleteProjectForm"

const ProjetDisplay = (props) => {

  const showModal = useSelector(state=>state.projets.showModal)
  const selectedProjet = useSelector(state=>state.projets.selectedProjet)
  const projet = props.projet;
  const dispatch = useDispatch();

  const handleDetail = () => {
    dispatch(setSelectedProjet(projet))
    dispatch(setShowModal("detailModal"))
    console.log(projet);
    console.log(showModal);
  }



  return (
    <div>
      <h3>Titre : {projet.titre}</h3>
      <p>état :{projet.etat}</p>
        <button onClick={handleDetail}>détails</button>
      <hr />
      <div>
      </div>


        <DetailProjet key={projet.id} projet={projet}/>

        {showModal==="detailModal"&& <Modal onClose={()=>dispatch(setShowModal(""))}>< DetailProjet projet={selectedProjet} /></Modal>}
        {showModal==="delete"&& <Modal onClose={()=>dispatch(setShowModal(""))}>< DeleteProjectForm projet={selectedProjet} /></Modal>}
        {showModal==="edit"&& <Modal onClose={()=>dispatch(setShowModal(""))}>< EditProjectForm projet={selectedProjet} /></Modal>}

    </div>



  );
};

export default ProjetDisplay;
