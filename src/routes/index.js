import { Router } from "express";
import languagesRoutes from "../routes/language.routes.js";
import authRoutes from "./auth.routes.js";
import codeRoutes from "./code.routes.js";
import racesRoutes from "./race.routes.js";
import userRoutes from "./user.routes.js";

const routes = Router();

routes.use("/languages", languagesRoutes);
routes.use("/codes", codeRoutes);
routes.use("/auth", authRoutes);
routes.use("/race", racesRoutes);
routes.use("/user", userRoutes);

export default routes;
