import { Router } from "express";
import {
  createServices,
  deleteServices,
  getServices,
  getServicesById,
  updateServices,
} from "../controllers/services.controllers.js";
const router = Router();

router.get("/services", getServices);
router.post("/services", createServices);
router.get("/services/:id", getServicesById);
router.put("/services/:id", updateServices);
router.delete("/services/:id", deleteServices);

export default router;
