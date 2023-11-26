import { CreateUserDto } from "../dtos/user";
import { UserEntity } from "../entities";

export abstract class UserRepository {
  abstract getById(id: number): Promise<UserEntity>;
  abstract create(user: CreateUserDto): Promise<UserEntity>;
  // abstract
}
