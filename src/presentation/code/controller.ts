import { GetRandomCode } from "../../domain/use-cases/code/get-random-code";
import { Request, Response } from "express";
import { GetLanguageByName } from "../../domain/use-cases/language/get-language-by-name";
import { CodeRepository, LanguageRepository } from "../../domain/repositories";

export class CodeController {
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

    new GetRandomCode(this.codeRepository)
      .execute(languageEntity)
      .then((randomCode) => res.status(200).json(randomCode))
      .catch((error) => res.status(400).json({ error }));
  };
}
