import { CreateUserDto } from "../../dtos/user";
import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface CreateUserInterface {
  execute(user: CreateUserDto): Promise<UserEntity>;
}

export class CreateUser implements CreateUserInterface {
  constructor(private readonly repository: UserRepository) {}

  execute(user: CreateUserDto): Promise<UserEntity> {
    return this.repository.create(user);
  }
}
