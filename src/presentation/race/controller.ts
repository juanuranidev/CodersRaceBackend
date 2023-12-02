import { Request, Response } from "express";
import { CreateRaceDto } from "../../domain/dtos/race";
import { RaceEntity } from "../../domain/entities";
import { RaceRepository } from "../../domain/repositories";
import { CreateRace } from "../../domain/use-cases/race/create-race";
import { GetRaceById } from "../../domain/use-cases/race/get-race-by-id";

export class RaceController {
  constructor(private readonly raceRepository: RaceRepository) {}

  public createRace = async (req: Request, res: Response) => {
    const [error, raceDto] = CreateRaceDto.create(req.body);

    if (error) {
      console.log({ error });
      return res.status(400).json(error);
    }

    return new CreateRace(this.raceRepository)
      .execute(raceDto!)
      .then((race) => res.json(race))
      .catch((error) => res.status(400).json(error));
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: "Id" });
    }

    return new GetRaceById(this.raceRepository)
      .execute(Number(id))
      .then((race) => res.json(race))
      .catch((error) => res.status(400).json(error));
  };
}
