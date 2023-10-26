import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProjetDisplay = (props) => {
  const projet = props.projet;
  const dispatch = useDispatch();



  return (
    <div>
      <h3>Titre : {projet.titre}</h3>
      <p>état :{projet.etat}</p>
      <hr />

      
    </div>



  );
};

export default ProjetDisplay;
