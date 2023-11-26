import { Request, Response } from "express";
import { CreateUserDto } from "../../domain/dtos/user";
import { UserRepository } from "../../domain/repositories";
import { CreateUser, GetUserById } from "../../domain/use-cases/user";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  public createUser = async (req: Request, res: Response) => {
    const [error, userDto] = CreateUserDto.create(req.body);

    if (error) {
      return res.status(400).json({ error: error });
    }

    await new CreateUser(this.userRepository)
      .execute(userDto!)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error }));
  };

  public getUserById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (!id) {
      res.status(400).json({ error: "Id not found" });
    }

    await new GetUserById(this.userRepository)
      .execute(Number(id))
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error }));
  };
}
