import {Router} from "express"
import { createTurnos, deleteTurnos, getTurnos, getTurnosById, updateTurnos } from "../controllers/turnos.controllers.js"


const router = Router()

router.get('/turnos',getTurnos)
router.post('/turnos',createTurnos)
router.get('/turnos/:id',getTurnosById)
router.put('/turnos/:id',updateTurnos)
router.delete('/turnos/:id',deleteTurnos)

export default router;