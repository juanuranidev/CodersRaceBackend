import { PrismaClient } from "@prisma/client";

import { Request, Response } from "express";
import { LanguageRepository } from "../../domain/repositories";
import { GetLanguages } from "../../domain/use-cases";

export class LanguageController {
  constructor(private readonly languageRepository: LanguageRepository) {}

  public getLanguages = async (req: Request, res: Response) => {
    const languages = await new GetLanguages(this.languageRepository).execute();
    res.status(200).json(languages);
  };
}
