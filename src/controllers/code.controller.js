import codeService from "../services/code.services.js";

class CodeController {
  async getRandom(req, res) {
    const { languageName } = req.query;

    const codes = await codeService.getRandom(languageName);
    res.status(200).json(codes);
  }
  async create(req, res) {
    const { text, language } = req.body;

    const code = await codeService.create({ text, language });
    res.status(201).json(code);
  }
}

const codeController = new CodeController();
export default codeController;
