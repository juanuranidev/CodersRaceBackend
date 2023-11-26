import { LanguageEntity } from "../../entities";
import { LanguageRepository } from "../../repositories";

export interface GetLanguageByNameInterface {
  execute(languageName: string): Promise<LanguageEntity | undefined>;
}

export class GetLanguageByName implements GetLanguageByNameInterface {
  constructor(private readonly repository: LanguageRepository) {}

  execute(languageName: string): Promise<LanguageEntity> {
    return this.repository.getByName(languageName);
  }
}
