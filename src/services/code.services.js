import languageRepository from "../repositories/code.repository.js";

class CodeService {
  async getRandom(languageId) {
    try {
      return await languageRepository.getRandom(languageId);
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(code) {
    console.log("CODE SERVICE", code);
    try {
      return await languageRepository.create(code);
    } catch (error) {
      throw new Error(error);
    }
  }
}

const codeService = new CodeService();
export default codeService;
