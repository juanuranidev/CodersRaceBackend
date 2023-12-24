import { envs } from "../../config";
import { JWTAdapter } from "../../config/adapters/jwt.adapter";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { UserEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors";
import { AuthRepository } from "../../domain/repositories";
import { PrismaDb } from "../db/prisma";

const db = PrismaDb.execute();

export class AuthRepositoryImpl implements AuthRepository {
  async loginUser(loginUserDto: LoginUserDto): Promise<any> {
    try {
      let user = await db.user.findFirst({
        where: {
          githubId: loginUserDto.githubId,
        },
      });

      if (!user) {
        user = await db.user.create({ data: loginUserDto });
      }

      const token = await new JWTAdapter(envs.JWT_SEED).generateToken({
        id: user.id,
        githubId: user.githubId,
      });
      console.log(token);
      if (!token) throw CustomError.internalServer("Error while creating JWT");

      return {
        user: UserEntity.fromObject(user),
        token: token,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
}
