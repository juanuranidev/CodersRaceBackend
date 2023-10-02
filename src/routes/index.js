import { Router } from "express";
import languagesRoutes from "../routes/language.routes.js";

const routes = Router();

routes.use("/languages", languagesRoutes);

export default routes;
