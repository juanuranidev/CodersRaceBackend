import languageService from "../services/language.services.js";

class LanguagesController {
  async findAll(req, res) {
    const languages = await languageService.findAll();

    res.status(200).json(languages);
  }

  async findById(req, res) {
    const { id } = req.params;

    const language = await languageService.findById(id);
    res.status(200).json(language);
  }

  async create(req, res) {
    const { name } = req.body;

    const language = await languageService.create({ name });
    res.status(201).json(language);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const language = await languageService.update(id, { name });
    res.status(200).json(language);
  }

  async delete(req, res) {
    const { id } = req.params;

    const language = await languageService.delete(id);
    res.status(200).json(language);
  }
}

const languageController = new LanguagesController();
export default languageController;
