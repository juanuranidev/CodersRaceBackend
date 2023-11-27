import { Router } from "express";
import { LanguageController } from "./controller";
import { LanguageRepositoryImpl } from "../../infraestructure/repositories";
export class LanguageRoutes {
  static get routes(): Router {
    const router = Router();

    const languageRepository = new LanguageRepositoryImpl();
    const languageController = new LanguageController(languageRepository);

    router.get("/", languageController.getLanguages);

    return router;
  }
}
