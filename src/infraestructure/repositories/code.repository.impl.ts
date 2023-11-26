import { CodeEntity, LanguageEntity } from "../../domain/entities";
import { CodeRepository } from "../../domain/repositories";
import { GetLanguageByName } from "../../domain/use-cases/language/get-language-by-name";
import { PrismaDb } from "../db/prisma";

const db = PrismaDb.execute();

export class CodeRepositoryImpl implements CodeRepository {
  async getRandom(language: LanguageEntity): Promise<any> {
    try {
      const codes = await db.code.findMany({
        where: {
          languageId: language.id,
        },
      });

      if (!codes) {
        throw new Error("ERROR");
      }

      const codeSelected = codes[Math.floor(Math.random() * codes.length)];

      return CodeEntity.fromObject({
        language,
        id: codeSelected.id,
        text: codeSelected.text,
      });
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}
