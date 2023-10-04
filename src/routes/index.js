import { Router } from "express";
import languagesRoutes from "../routes/language.routes.js";
import codeRoutes from "./code.routes.js";

const routes = Router();

routes.use("/languages", languagesRoutes);
routes.use("/codes", codeRoutes);

export default routes;
