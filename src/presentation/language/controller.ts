import { GetLanguages } from "../../domain/use-cases";
import { Request, Response } from "express";
import { LanguageRepository } from "../../domain/repositories";

export class LanguageController {
  constructor(private readonly languageRepository: LanguageRepository) {}

  public getLanguages = async (req: Request, res: Response) => {
    new GetLanguages(this.languageRepository)
      .execute()
      .then((languages) => res.status(200).json(languages))
      .catch((error) => res.status(400).json(error));
  };
}
