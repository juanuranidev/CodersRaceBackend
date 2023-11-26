import { LanguageEntity } from "../../entities";
import { LanguageRepository } from "../../repositories";

export interface GetLanguagesInterface {
  execute(): Promise<LanguageEntity[]>;
}

export class GetLanguages implements GetLanguagesInterface {
  constructor(private readonly repository: LanguageRepository) {}

  execute(): Promise<LanguageEntity[]> {
    return this.repository.getAll();
  }
}
