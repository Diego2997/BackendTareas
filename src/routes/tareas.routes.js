import { Router } from "express";
import { borrarTarea, crearTarea, obtenerTareas } from "../controllers/tareas.controller";

const router = Router()

router.get("/tareas",obtenerTareas)
router.post("/tareas",crearTarea)
router.delete("/tareas/:id",borrarTarea)

export default router;