import { RaceEntity } from "../../entities";
import { CreateRaceDto } from "../../dtos/race";
import { RaceRepository } from "../../repositories";

export interface CreateRaceInterface {
  execute(race: CreateRaceDto): Promise<RaceEntity>;
}

export class CreateRace implements CreateRaceInterface {
  constructor(private readonly repository: RaceRepository) {}

  execute(race: CreateRaceDto): Promise<RaceEntity> {
    return this.repository.create(race);
  }
}
