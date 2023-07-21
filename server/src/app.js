import express from "express";
const app = express();
import morgan from "morgan";
import authRoutes from "./routes/auth.routers.js";
import servicesRoutes from "./routes/services.routers.js";
import turnosRoutes from "./routes/turnos.routers.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(authRoutes);
app.use(servicesRoutes);
app.use(turnosRoutes)

export default app;
