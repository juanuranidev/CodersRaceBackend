import { RaceEntity } from "../../entities";
import { RaceRepository } from "../../repositories";

export interface GetRaceByIdInterface {
  execute(id: number): Promise<RaceEntity>;
}

export class GetRaceById implements GetRaceByIdInterface {
  constructor(private readonly repository: RaceRepository) {}

  execute(id: number): Promise<RaceEntity> {
    return this.repository.getById(id);
  }
}
