import Tarea from "../models/tarea";

export const obtenerTareas = async(req,res) =>{
   try {
    const tareas =await Tarea.find()
    res.status(200).json(tareas)
   } catch (error) {
    res.status(404).json({mensaje:"Error al buscar las tareas"})
   }
}

export const crearTarea = async(req,res) =>{
    try {
    const nuevaTarea = new Tarea(req.body)
    await nuevaTarea.save()
    res.status(201).json({mensaje:"Tarea creada"})
    } catch (error) {
     res.status(400).json({mensaje:"Error al crear una tarea"})
    }
 }

 export const borrarTarea = async(req,res) =>{
    try {
    await Tarea.findByIdAndDelete(req.params.id)
    res.status(200).json({mensaje:"Tarea eliminada"})
    } catch (error) {
     res.status(400).json({mensaje:"Error al crear una tarea"})
    }
 }