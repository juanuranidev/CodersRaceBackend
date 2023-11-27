import { Router } from "express";
import { AuthController } from "./controller";
import { UserRepositoryImpl } from "../../infraestructure/repositories";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const userRepository = new UserRepositoryImpl();
    const authController = new AuthController(userRepository);

    router.post("/login", authController.login);

    return router;
  }
}
