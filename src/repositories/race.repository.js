import Code from "../models/code.model.js";
import Race from "../models/race.model.js";
import User from "../models/user.model.js";
import Language from "../models/language.model.js";

class RaceRepository {
  async getAllRacesByUser(userId) {
    try {
      const user = await User.findById(userId).exec();

      const racesByUser = await Race.aggregate([
        {
          $match: { user: user._id },
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
        {
          $project: {
            _id: 1,
            createdAt: 1,
            language: {
              name: 1,
            },
            cpm: 1,
            timeInMs: 1,
          },
        },
      ]).exec();

      return racesByUser;
    } catch (error) {
      throw new Error(error);
    }
  }
  async postRace(race) {
    try {
      const user = await User.findById(race.user).exec();
      if (!user) {
        throw new Error("Not a valid user");
      }

      const code = await Code.findById(race.code).exec();
      if (!code) {
        throw new Error("Not a valid code");
      }

      const language = await Language.findById(race.language).exec();
      if (!language) {
        throw new Error("Not a valid language");
      }

      const raceCreated = await Race.create({
        user: user,
        code: code,
        cpm: race.cpm,
        language: language,
        timeInMs: race.timeInMs,
      });

      const raceFormatted = await Race.aggregate([
        {
          $match: { _id: raceCreated._id },
        },
        {
          $lookup: {
            from: "codes",
            localField: "code",
            foreignField: "_id",
            as: "code",
          },
        },
        {
          $unwind: "$code",
        },
      ]).exec();

      console.log(raceFormatted);
      return raceFormatted[0];
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

const raceRepository = new RaceRepository();
export default raceRepository;
