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
  async getUserLeaderboard(): Promise<UserEntity[] | undefined> {
    try {
      const users = await db.user.findMany({
        orderBy: {},
      });

      return users.map((user) => UserEntity.fromObject(user));
    } catch (error) {
      throw new Error("OIAWDNBAIO");
    }
  }
}
