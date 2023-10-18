import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.get("/leaderboard", userControllers.getLeaderboard);

export default userRoutes;
