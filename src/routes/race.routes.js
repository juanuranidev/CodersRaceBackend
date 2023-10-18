import { Router } from "express";
import raceControllers from "../controllers/race.controllers.js";

const racesRoutes = Router();

racesRoutes.get("/", raceControllers.getAllRacesByUser);
racesRoutes.post("/create", raceControllers.postRace);

export default racesRoutes;
