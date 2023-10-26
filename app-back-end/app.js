import express from "express"
import cors from "cors"
import routeProjet from "./routes/routeProjet.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/projets',routeProjet)

app.listen(port,()=>{
    console.log(`le serveur fonctionne et est disponible en http://127.0.0.1:${port}`);
})