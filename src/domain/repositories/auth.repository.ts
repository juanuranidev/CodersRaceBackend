import { UserEntity } from "../entities";
import { LoginUserDto } from "../dtos/auth/login-user.dto";

export abstract class AuthRepository {
  abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>;
}
