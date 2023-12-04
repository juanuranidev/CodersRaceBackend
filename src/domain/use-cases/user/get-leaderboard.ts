import { UserEntity } from "../../entities";
import { UserRepository } from "../../repositories";

export interface GetUserLeaderboardInterface {
  execute(): Promise<UserEntity[] | undefined>;
}

export class GetUserLeaderboard implements GetUserLeaderboardInterface {
  constructor(public readonly repository: UserRepository) {}

  execute(): Promise<UserEntity[] | undefined> {
    return this.repository.getUsersLeaderboard();
  }
}
