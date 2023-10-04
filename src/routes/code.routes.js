import { Router } from "express";
import codeController from "../controllers/code.controller.js";

const codeRoutes = Router();

codeRoutes.get("/get-random", codeController.getRandom);
codeRoutes.post("/create", codeController.create);

export default codeRoutes;
