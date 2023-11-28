import { Router } from "express";
import { RaceController } from "./controller";
import { RaceRepositoryImpl } from "../../infraestructure/repositories";

export class RaceRoutes {
  static get routes(): Router {
    const router = Router();

    const raceRepository = new RaceRepositoryImpl();
    const raceController = new RaceController(raceRepository);

    router.post("/", raceController.createRace);

    return router;
  }
}
