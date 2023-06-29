import express from "express";
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import 'dotenv/config'

const app = express()

app.set("port",process.env.PORT || 4000)

app.use(cors())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,'/public')))



app.listen(app.get("port"),()=>{
    console.log("Servidor corriendo en el puerto ",app.get("port"))
})