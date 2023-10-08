import Language from "../models/language.model.js";

class LanguageRepository {
  async getAll() {
    return await Language.find();
  }
}

const languageRepository = new LanguageRepository();
export default languageRepository;
