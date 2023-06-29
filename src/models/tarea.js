import { model,Schema } from "mongoose";

const tareaSchema = new Schema({
    nombreTarea:{
    type:String,
    required:true,
    minLength:2,
    maxLength:100,
    unique:true
    },
    completada:{
    type:Boolean,
    default:true
}
})

const Tarea = model("Tarea",tareaSchema)
export default Tarea