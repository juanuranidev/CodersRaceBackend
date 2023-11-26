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

    const userCreated = await new CreateUser(this.userRepository).execute(
      userDto!
    );

    res.status(201).json(userCreated);
  };

  public getUserById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    console.log({ id });

    if (!id) {
      res.status(400).json({ error: "Id not found" });
    }

    const user = await new GetUserById(this.userRepository)
      .execute(Number(id))
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error }));

    res.status(200).json(user);
  };
}
