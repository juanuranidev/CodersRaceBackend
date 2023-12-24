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
      console.log("ERROOOROR", error);
      throw new Error(error);
    }
  }
  async getById(id: number): Promise<RaceEntity> {
    try {
      const race = await db.race.findFirst({
        where: {
          id: id,
        },
        include: {
          code: {
            include: {
              language: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });

      if (!race) {
        throw "race not found";
      }

      return RaceEntity.fromObject({
        ...race,
        user: race.userId,
        code: race.code!.text,
        language: race.code!.language!.name,
      });
    } catch (error) {
      console.log({ error });
      throw new Error("Method not implemented.");
    }
  }
}
