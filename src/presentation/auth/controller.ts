import { Request, Response } from "express";
import { AuthRepository } from "../../domain/repositories";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { LoginUser } from "../../domain/use-cases/auth/login-user";

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  public login = async (req: Request, res: Response) => {
    const { data } = req.body;
    const [error, loginUserDto] = LoginUserDto.create(data);
    if (error) {
      res.status(400).json({ error });
    }

    new LoginUser(this.authRepository)
      .execute(loginUserDto!)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error }));

    // const userExist = await new GetUserByGithubId(this.userRepository).execute(
    //   loginUserDto!.githubId
    // );

    // if (Boolean(!userExist)) {
    //   return new CreateUser(this.userRepository)
    //     .execute(loginUserDto!)
    //     .then((user) => res.json(user))
    //     .catch((error) => res.status(400).json({ error }));
    // }

    // return res.status(200).json(userExist);
  };
}
