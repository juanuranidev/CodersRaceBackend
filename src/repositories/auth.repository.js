import User from "../models/user.model.js";

class AuthRepository {
  async login(profile) {
    const userAlreadyExist = await User.findOne({
      githubId: profile.githubId,
    }).exec();

    if (!userAlreadyExist) {
      const newUser = await User.create(profile);
      return newUser;
    }
    console.log(userAlreadyExist);
    return userAlreadyExist;
  }
}

const authRepository = new AuthRepository();
export default authRepository;
