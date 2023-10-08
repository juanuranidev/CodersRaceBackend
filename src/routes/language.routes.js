import { Router } from "express";
import languageController from "../controllers/language.controller.js";

const languagesRoutes = Router();

languagesRoutes.get("/", languageController.getAll);

export default languagesRoutes;
