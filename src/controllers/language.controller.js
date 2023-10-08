import languageService from "../services/language.services.js";

class LanguagesController {
  async getAll(req, res) {
    const languages = await languageService.getAll();

    res.status(200).json(languages);
  }
}

const languageController = new LanguagesController();
export default languageController;
