import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routers.js";
import servicesRoutes from "./routes/services.routers.js";
import turnosRoutes from "./routes/turnos.routers.js";
import cors from "cors";
import fileUpload from "express-fileupload";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"./upload"
}))
app.use(morgan("dev"));
app.use(cors());

app.use(authRoutes);
app.use(servicesRoutes);
app.use(turnosRoutes)

export default app;
