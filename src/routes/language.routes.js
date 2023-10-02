import { Router } from "express";
import languageController from "../controllers/language.controller.js";

const languagesRoutes = Router();

languagesRoutes.get("/", languageController.findAll);
languagesRoutes.get("/:id", languageController.findById);
languagesRoutes.post("/create", languageController.create);
languagesRoutes.put("/update/:id", languageController.update);
languagesRoutes.delete("/delete/:id", languageController.delete);

export default languagesRoutes;
