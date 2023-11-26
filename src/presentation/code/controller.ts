import { PrismaClient } from "@prisma/client";

import { Request, Response } from "express";
import { LanguageEntity } from "../../domain/entities";
import { CodeRepository, LanguageRepository } from "../../domain/repositories";
import { GetLanguages } from "../../domain/use-cases";
import { GetRandomCode } from "../../domain/use-cases/code/get-random-code";
import { GetLanguageByName } from "../../domain/use-cases/language/get-language-by-name";

export class CodeController {
  //* no va a tener métodos estáticos porque vamos a querer hacer el dependecy injección
  // Por ejemplo inyectar un repositorio, que nuestras rutas usen ese repositorio.
  // O bien inyectar el repositorio para usarlo mediante casos de uso
  constructor(
    private readonly codeRepository: CodeRepository,
    private readonly languageRepository: LanguageRepository
  ) {}

  public getRandomCode = async (req: Request, res: Response) => {
    const { language } = req.query;
    if (!language) {
      res.status(400).json("ERRROR");
    }

    const languageEntity: any = await new GetLanguageByName(
      this.languageRepository
    )
      .execute(String(language))
      .catch((error) => res.status(400).json({ error }));

    const randomCodeEntity = await new GetRandomCode(this.codeRepository)
      .execute(languageEntity)
      .catch((error) => res.status(400).json({ error }));

    res.status(200).json(randomCodeEntity);
  };
}
