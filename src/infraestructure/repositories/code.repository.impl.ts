import { CodeEntity, LanguageEntity } from "../../domain/entities";
import { CodeRepository } from "../../domain/repositories";
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
      console.log({ codes });
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
      console.log({ error });
      throw new Error("Method not implemented.");
    }
  }
}
