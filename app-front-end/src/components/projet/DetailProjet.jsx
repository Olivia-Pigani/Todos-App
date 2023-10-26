import { useDispatch, useSelector } from "react-redux"
import { setShowModal } from "./projetSlice"

const DetailProjet = (props) => {

    const dispatch = useDispatch()
    const projet = props.projet

    const projets = useSelector(state=>state.projets.projets)
   const showModal = useSelector(state=>state.projets.showModal)



    const handleDeleteButton = () => {
        dispatch(setShowModal("delete"))
    }
    const handleUpdateButton = () => {
        dispatch(setShowModal("edit"))

    }

    

    return(
    
 <div>

        <h2> Titre : {projet.titre}</h2>
        <p>detail : {projet.details}</p>
        <p>état :{projet.etat}</p>
        <p>Date De début : {projet.dateDeDebut}</p>
        <p>Date de Fin : {projet.dateDeFin}</p>



<div><button onClick={handleDeleteButton}>Supprimer</button></div>
<div></div><button onClick={handleUpdateButton}>Modifier</button></div>


    
    )
}
export default DetailProjet