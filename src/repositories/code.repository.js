import Code from "../models/code.model.js";
import mongoose from "mongoose";

class CodeRepository {
  async getRandom(languageId) {
    const randomCode = await Code.aggregate([
      {
        $match: { language: new mongoose.Types.ObjectId(languageId) },
      },
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
    ]).exec();

    return randomCode;
  }
  async create(code) {
    console.log("CODE REPOSITORY", code);
    return await Code.create(code);
  }
}

const codeRepository = new CodeRepository();
export default codeRepository;
