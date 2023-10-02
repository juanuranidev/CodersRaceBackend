import languageRepository from "../repositories/language.repository.js";

class LanguageService {
  async findAll() {
    try {
      return await languageRepository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id) {
    try {
      return await languageRepository.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(language) {
    try {
      return await languageRepository.create(language);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, language) {
    try {
      return await languageRepository.update(id, language, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      return await languageRepository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

const languageService = new LanguageService();
export default languageService;
