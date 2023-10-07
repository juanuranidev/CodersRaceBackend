import languageRepository from "../repositories/code.repository.js";

class CodeService {
  async getRandom(languageName) {
    try {
      return await languageRepository.getRandom(languageName);
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(code) {
    try {
      return await languageRepository.create(code);
    } catch (error) {
      throw new Error(error);
    }
  }
}

const codeService = new CodeService();
export default codeService;
