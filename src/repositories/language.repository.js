import Language from "../models/language.model.js";

class LanguageRepository {
  async findAll() {
    return await Language.find();
  }

  async findById(id) {
    return await Language.findById(id);
  }

  async create(language) {
    return await Language.create(language);
  }

  async update(id, language) {
    return await Language.findOneAndUpdate({ _id: id }, language, {
      new: true,
    });
  }

  async delete(id) {
    return await Language.deleteOne({ _id: id });
  }
}

const languageRepository = new LanguageRepository();
export default languageRepository;
