import { useDispatch, useSelector } from "react-redux";
import AddProjectForm from "./components/projet/AddProjectForm";
import DeleteProjectForm from "./components/projet/DeleteProjectForm";
import EditProjectForm from "./components/projet/EditProjectForm";
import ProjetDisplay from "./components/projet/ProjetDisplay";
import { useEffect } from "react";
import axios from "axios";
import { setProjects } from "./components/projet/projetSlice";

function App() {
  const formMode = useSelector((state) => state.projets.formMode);
  const projets = useSelector((state) => state.projets.projets);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/projets/").then((response) => {
      dispatch(setProjects(response.data));
    });
  }, []);

  return (
    <div className="App">
      <h1>Project Tracker Pro</h1>

      <AddProjectForm />
      <DeleteProjectForm />
      <EditProjectForm />

      {console.log(projets)}

      <p>{projets.titre}</p>

      {projets.length === 0 ? (
        <p>Il n'y a pas de projets !</p>
      ) : (
        projets.map((projet) => (
          <ProjetDisplay key={projet.id} projet={projet} />
        ))
      )}
    </div>
  );
}

export default App;
