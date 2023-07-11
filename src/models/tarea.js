import { model,Schema } from "mongoose";

const tareaSchema = new Schema({
    nombreTarea:{
    type:String,
    required:true,
    minLength:2,
    maxLength:100,
    unique:true
    }
})

tareaSchema.pre("find",()=>{
    console.log("hola desde el middleware de mongoose")
})

const Tarea = model("Tarea",tareaSchema)
export default Tarea