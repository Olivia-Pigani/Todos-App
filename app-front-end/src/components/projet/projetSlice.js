import { createSlice } from "@reduxjs/toolkit";

const projetSlice = createSlice({
    name:"projets",
    initialState:{
        projets:[],
        formMode:"",
        selectedProjet:null
    },
    reducers:{
        setFormMode:(state,action)=>{
            state.formMode=action.payload
            console.log(state.formMode);
        },
        setSelectedProjet : (state, action) => {
            state.selectedProjet = action.payload
        },
        addProjet:(state,action)=>{
            state.projets.push(action.payload)
        },
        editProjet:(state,action)=>{
            let foundProjet =state.projets.find(projet=>projet.id===action.payload.id)
            if(foundProjet){
                state.projets=[...state.projets.filter(projet=>projet.id !== action.payload.id), action.payload]
            }
        },
        deleteProjet:(state,action)=>{
            let foundProjet=state.projets.find(projet=>projet.id===action.payload.id)
            if(foundProjet){
                state.projets=state.projets.filter(projet=>projet.id!==action.payload.id)
            }
        }

    }
})
export const {setFormMode,setSelectedProjet,addProjet,editProjet,deleteProjet} = projetSlice.actions
export default projetSlice.reducer