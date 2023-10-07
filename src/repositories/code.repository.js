import Code from "../models/code.model.js";
import Language from "../models/language.model.js";

class CodeRepository {
  async getRandom(languageName) {
    const language = await Language.findOne({
      name: new RegExp(languageName, "i"),
    }).exec();

    const codes = await Code.aggregate([
      {
        $lookup: {
          from: "languages",
          localField: "language",
          foreignField: "_id",
          as: "language",
        },
      },
      {
        $unwind: "$language",
      },
      {
        $match: { language: language },
      },
    ]).exec();

    const randomCode = codes[Math.floor(Math.random() * codes.length)];
    return randomCode;
  }
  async create(code) {
    return await Code.create(code);
  }
}

const codeRepository = new CodeRepository();
export default codeRepository;
