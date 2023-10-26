import { useDispatch, useSelector } from "react-redux";
import AddProjectForm from "./components/projet/AddProjectForm";
import ProjetDisplay from "./components/projet/ProjetDisplay";
import { useEffect, useRef } from "react";
import axios from "axios";
import { setFiltrage, setProjects, setShowModal } from "./components/projet/projetSlice";


function App() {
  const projets = useSelector((state) => state.projets.projets);
  const projectFiltered = useSelector((state) => state.projets.projectFiltered);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/projets/").then((response) => {
      dispatch(setProjects(response.data));
    });
  }, []);

  return (
    <div className="App">
      <h1>Project Tracker Pro</h1>

      <input
        type="text"
        placeholder="filtrage"
        value={projectFiltered}
        onChange={(e) => dispatch(setFiltrage(e.target.value))}
      ></input>

      <AddProjectForm />
 

      {console.log(projets)}

      <p>{projets.titre}</p>

      {projets.length === 0 ? (
        <p>Il n'y a pas de projets !</p>
      ) : (
        projets
          // on filtre
          .filter((projet) =>
            projet.etat.toLowerCase().includes(projectFiltered.toLowerCase())
          )

          // on affiche
          .map((projet) => <ProjetDisplay key={projet.id} projet={projet} />)
      )}





    </div>

    



  );
}

export default App;
