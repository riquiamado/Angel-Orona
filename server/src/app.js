import express from 'express';
const app = express();
import morgan from 'morgan'
import authRoutes from './routes/auth.routers.js'




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(authRoutes)

export default app;