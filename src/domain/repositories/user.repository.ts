import { CreateUserDto } from "../dtos/user";
import { UserEntity } from "../entities";

export abstract class UserRepository {
  abstract create(user: CreateUserDto): Promise<UserEntity>;
  abstract getById(id: number): Promise<UserEntity | undefined>;
}
