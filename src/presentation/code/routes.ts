import { Router } from "express";
import { CodeRepositoryImpl } from "../../infraestructure/repositories";
import { LanguageRepositoryImpl } from "../../infraestructure/repositories/language.repository.impl";
import { CodeController } from "./controller";

export class CodeRoutes {
  static get routes(): Router {
    const router = Router();

    const codeRepository = new CodeRepositoryImpl();
    const languageRepository = new LanguageRepositoryImpl();

    const codeController = new CodeController(
      codeRepository,
      languageRepository
    );

    router.get("/get-random", codeController.getRandomCode);

    return router;
  }
}
