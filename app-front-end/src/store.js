import { configureStore } from "@reduxjs/toolkit";
import projetSlice from "./components/projet/projetSlice";

const store = configureStore({
    reducer:{
        projets:projetSlice
    }
})
export default store