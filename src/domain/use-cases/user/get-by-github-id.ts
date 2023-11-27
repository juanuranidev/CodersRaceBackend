import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface GetUserByGithubIdInterface {
  execute(id: string): Promise<UserEntity | undefined>;
}

export class GetUserByGithubId implements GetUserByGithubIdInterface {
  constructor(private readonly repository: UserRepository) {}

  execute(id: string): Promise<UserEntity | undefined> {
    return this.repository.getByGithubId(id);
  }
}
