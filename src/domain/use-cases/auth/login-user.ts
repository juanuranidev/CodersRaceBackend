import { LoginUserDto } from "../../dtos/auth/login-user.dto";
import { UserEntity } from "../../entities";
import { AuthRepository } from "../../repositories";

export interface LoginInterface {
  execute(user: UserEntity): Promise<UserEntity>;
}

export class LoginUser implements LoginInterface {
  constructor(private readonly repository: AuthRepository) {}

  execute(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.repository.loginUser(loginUserDto);
  }
}
