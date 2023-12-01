import { CreateUser } from "../../domain/use-cases/user";
import { CreateUserDto } from "../../domain/dtos/user";
import { UserRepository } from "../../domain/repositories";
import { Request, Response } from "express";
import { GetUserByGithubId } from "../../domain/use-cases/user/get-by-github-id";

export class AuthController {
  constructor(private readonly userRepository: UserRepository) {}

  public login = async (req: Request, res: Response) => {
    const { data } = req.body;
    const [error, userDto] = CreateUserDto.create(data);

    if (error) {
      res.status(400).json({ error });
    }

    const userExist = await new GetUserByGithubId(this.userRepository).execute(
      userDto!.githubId
    );

    if (Boolean(!userExist)) {
      return new CreateUser(this.userRepository)
        .execute(userDto!)
        .then((user) => res.json(user))
        .catch((error) => res.status(400).json({ error }));
    }

    return res.status(200).json(userExist);
  };
}
