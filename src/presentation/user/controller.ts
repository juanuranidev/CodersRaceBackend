import { Request, Response } from "express";
import { UserRepository } from "../../domain/repositories";
import { GetUserById } from "../../domain/use-cases/user";
import { GetUsersLeaderboard } from "../../domain/use-cases/user/get-users-leaderboard";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}
  public getUserById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (!id) {
      return res.status(400).json({ error: "Id not found" });
    }

    return new GetUserById(this.userRepository)
      .execute(Number(id))
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error }));
  };
  public getUsersLeaderboard = async (req: Request, res: Response) => {
    return new GetUsersLeaderboard(this.userRepository)
      .execute()
      .then((users) => res.json(users))
      .catch((error) => res.status(400).json({ error }));
  };
}
