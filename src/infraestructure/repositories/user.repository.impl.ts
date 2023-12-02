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
        include: {
          _count: true,
        },
        where: {
          id: id,
        },
      });

      const averageUserCpm = await db.race.groupBy({
        by: ["userId"],
        _avg: {
          cpm: true,
        },
        where: {
          userId: user!.id,
        },
      });

      if (!user) {
        throw "AIOUWDBN";
      }

      return UserEntity.fromObject({
        ...user,
        races: user?._count.races,
        averageCpm: averageUserCpm[0]._avg.cpm,
      });
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
      const users = await db.user.findMany();

      const racesOrderByAverageCpm = await db.race.groupBy({
        by: ["userId"],
        _avg: {
          cpm: true,
        },
        orderBy: {
          _avg: {
            cpm: "asc",
          },
        },
        _count: {
          _all: true,
        },
      });

      const usersWithAverageCpm = racesOrderByAverageCpm.map((race) => ({
        races: race._count._all,
        averageCpm: race._avg.cpm,
        ...users.find((user) => user.id === race.userId),
      }));

      return usersWithAverageCpm.map((user) => UserEntity.fromObject(user));
    } catch (error) {
      console.log(error);
      throw new Error("Method not implemented.");
    }
  }
}
