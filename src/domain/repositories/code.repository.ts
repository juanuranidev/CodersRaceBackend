import { CodeEntity, LanguageEntity } from "../entities";

export abstract class CodeRepository {
  abstract getRandom(language: LanguageEntity): Promise<CodeEntity>;
}
