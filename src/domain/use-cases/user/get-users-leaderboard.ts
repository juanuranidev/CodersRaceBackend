import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface GetUsersLeaderboardInterface {
  execute(): Promise<UserEntity[]>;
}

export class GetUsersLeaderboard implements GetUsersLeaderboardInterface {
  constructor(public readonly repository: UserRepository) {}

  execute(): Promise<UserEntity[]> {
    return this.repository.getUsersLeaderboard();
  }
}
