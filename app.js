import express from "express";
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import 'dotenv/config'
import './src/db/mongoConnection'
import tareasRouter from "./src/routes/tareas.routes";

const app = express()

app.set("port",process.env.PORT || 4000)
app.listen(app.get("port"),()=>{
    console.log("Servidor corriendo en el puerto ",app.get("port"))
})

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())
// app.use(cors())
app.use(morgan("dev"))
app.use(express.static("public"))

app.use('/api',tareasRouter)
