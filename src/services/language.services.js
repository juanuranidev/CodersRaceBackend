import languageRepository from "../repositories/language.repository.js";

class LanguageService {
  async getAll() {
    try {
      return await languageRepository.getAll();
    } catch (error) {
      throw new Error(error);
    }
  }
}

const languageService = new LanguageService();
export default languageService;
