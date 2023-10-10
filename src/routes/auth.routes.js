import { Router } from "express";
import authController from "../controllers/auth.controllers.js";

const authRoutes = Router();

authRoutes.post("/login", authController.login);

export default authRoutes;
