import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface GetUserByIdInterface {
  execute(id: number): Promise<UserEntity | undefined>;
}

export class GetUserById implements GetUserByIdInterface {
  constructor(private readonly repository: UserRepository) {}

  execute(id: number): Promise<UserEntity | undefined> {
    return this.repository.getById(id);
  }
}
