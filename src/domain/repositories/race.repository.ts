import { RaceEntity } from "../entities";
import { CreateRaceDto } from "../dtos/race";

export abstract class RaceRepository {
  abstract create(race: CreateRaceDto): Promise<RaceEntity>;
}
