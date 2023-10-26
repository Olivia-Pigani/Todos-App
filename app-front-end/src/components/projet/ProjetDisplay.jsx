import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProjetDisplay = (props) => {
  const projet = props.projet;
  const dispatch = useDispatch();



  return (
    <div>
      <h5>{projet.titre}</h5>
      <hr />
      <p>{projet.etat}</p>
    </div>



  );
};

export default ProjetDisplay;
