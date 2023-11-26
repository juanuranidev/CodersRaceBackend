import { Router } from "express";
import { LanguageRepositoryImpl } from "../../infraestructure/repositories/language.repository.impl";
import { LanguageController } from "./controller";

export class LanguageRoutes {
  static get routes(): Router {
    const router = Router();

    const languageRepository = new LanguageRepositoryImpl();
    const languageController = new LanguageController(languageRepository);

    router.get("/", languageController.getLanguages);

    return router;
  }
}
