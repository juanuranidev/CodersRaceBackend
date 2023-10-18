import raceRepository from "../repositories/race.repository.js";

class RaceServices {
  async getAllRacesByUser(userId) {
    try {
      return await raceRepository.getAllRacesByUser(userId);
    } catch (error) {
      throw new Error(error);
    }
  }
  async postRace(race) {
    try {
      return await raceRepository.postRace(race);
    } catch (error) {
      throw new Error(error);
    }
  }
}

const raceServices = new RaceServices();
export default raceServices;
