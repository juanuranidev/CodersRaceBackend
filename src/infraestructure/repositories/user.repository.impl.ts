import { CreateUserDto } from "../../domain/dtos/user";
import { UserEntity } from "../../domain/entities";
import { UserRepository } from "../../domain/repositories";
import { PrismaDb } from "../db/prisma";

const db = PrismaDb.execute();
export class UserRepositoryImpl implements UserRepository {
  async create(user: CreateUserDto): Promise<UserEntity> {
    try {
      const userCreated = await db.user.create({
        data: user,
      });

      return UserEntity.fromObject(userCreated);
    } catch (error) {
      throw error;
    }
  }
  async getById(id: number): Promise<UserEntity | undefined> {
    try {
      const user = await db.user.findFirst({
        where: {
          id: id,
        },
      });
      if (!user) {
        throw "AIOUWDBN";
      }
      return UserEntity.fromObject(user);
    } catch (error) {
      throw error;
    }
  }
  async getByGithubId(id: string): Promise<UserEntity | undefined> {
    try {
      const user = await db.user.findFirst({
        where: {
          githubId: id,
        },
      });

      if (!user) {
        return undefined;
      }

      return UserEntity.fromObject(user);
    } catch (error) {
      throw error;
    }
  }
  async getUsersLeaderboard(): Promise<UserEntity[]> {
    try {
      const users = await db.user.findMany({
        include: {
          races: true,
        },
      });
      console.log(users);

      const leaderboard = await Promise.all(
        users.map(async (user) => {
          const totalRaces = user.races.length;
          const totalCpm = user.races.reduce((sum, race) => sum + race.cpm, 0);
          const averageCpm = totalRaces > 0 ? totalCpm / totalRaces : 0;

          const mostUsedLanguage = await db.race.groupBy({
            by: ["codeId"],
            _count: { codeId: true },
            // code: { select: { language: true } },
          });
          // .orderBy({
          //   _count: { codeId: 'desc' },
          // })
          // .first();

          return {
            userId: user.id,
            userName: user.name,
            averageCpm,
            totalRaces,
            // : mostUsedLanguage?.code?.language.name || "",
          };
        })
      );
      console.log(leaderboard);
      return [];
      // return users.map((user) => UserEntity.fromObject(user));
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}
