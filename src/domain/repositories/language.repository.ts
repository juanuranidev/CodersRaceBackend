import { LanguageEntity } from "../entities";

export abstract class LanguageRepository {
  abstract getAll(): Promise<LanguageEntity[]>;
  abstract getByName(name: string): Promise<LanguageEntity>;
}
