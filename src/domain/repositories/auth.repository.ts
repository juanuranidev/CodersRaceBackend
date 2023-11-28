import { UserEntity } from "../entities";

export abstract class AuthRepository {
  abstract login(): Promise<UserEntity>;
}
