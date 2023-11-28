import { CreateRaceDto } from "../../domain/dtos/race";
import { RaceEntity } from "../../domain/entities";
import { RaceRepository } from "../../domain/repositories";
import { PrismaDb } from "../db/prisma";

const db = PrismaDb.execute();

export class RaceRepositoryImpl implements RaceRepository {
  async create(race: CreateRaceDto): Promise<RaceEntity> {
    try {
      const raceCreated = await db.race.create({
        data: {
          ...race,
          user: { connect: { id: race.user } },
          code: { connect: { id: race.code } },
        },
      });

      return RaceEntity.fromObject({
        id: raceCreated.id,
        user: raceCreated.userId,
        code: raceCreated.codeId,
        cpm: raceCreated.cpm,
        timeInMs: raceCreated.timeInMs,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
