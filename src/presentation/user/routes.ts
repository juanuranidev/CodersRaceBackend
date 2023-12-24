import { Router } from "express";
import { UserRepositoryImpl } from "../../infraestructure/repositories/user.repository.impl";
import { UserController } from "./controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const userRepository = new UserRepositoryImpl();
    const userController = new UserController(userRepository);

    router.get("/get/:id", userController.getUserById);
    router.get("/leaderboard", userController.getUsersLeaderboard);

    return router;
  }
}
