import { LanguageEntity } from "../../domain/entities";
import { LanguageRepository } from "../../domain/repositories";
import { PrismaDb } from "../db/prisma";

const db = PrismaDb.execute();

export class LanguageRepositoryImpl implements LanguageRepository {
  async getAll(): Promise<LanguageEntity[]> {
    try {
      const languages = await db.language.findMany();

      return languages.map((language) => LanguageEntity.fromObject(language));
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
  async getByName(name: string): Promise<LanguageEntity> {
    try {
      const language = await db.language.findFirst({
        where: {
          name: name,
        },
      });

      if (!language) {
        throw new Error("Error");
      }

      return LanguageEntity.fromObject(language);
    } catch (error) {
      throw new Error("error");
    }
  }
}
