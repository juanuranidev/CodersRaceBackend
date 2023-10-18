import raceServices from "../services/race.services.js";

class RaceControllers {
  async getAllRacesByUser(req, res) {
    const { userId } = req.query;

    const races = await raceServices.getAllRacesByUser(userId);

    res.status(200).json(races);
  }
  async postRace(req, res) {
    const { user, language, code, timeInMs, cpm } = req.body;

    const race = await raceServices.postRace({
      cpm,
      user,
      code,
      timeInMs,
      language,
    });
    res.status(200).json(race);
  }
}

const raceControllers = new RaceControllers();
export default raceControllers;
