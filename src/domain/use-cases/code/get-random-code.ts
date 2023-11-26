import { CodeEntity, LanguageEntity } from "../../entities";
import { CodeRepository } from "../../repositories";

export interface GetRandomCodeInterface {
  execute(language: LanguageEntity): Promise<CodeEntity>;
}

export class GetRandomCode implements GetRandomCodeInterface {
  constructor(private readonly repository: CodeRepository) {}

  execute(language: LanguageEntity): Promise<CodeEntity> {
    return this.repository.getRandom(language);
  }
}
