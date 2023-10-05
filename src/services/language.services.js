import codeRepository from "../repositories/code.repository.js";

class LanguageService {
  async findById(id) {
    try {
      return await codeRepository.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

const languageService = new LanguageService();
export default languageService;
