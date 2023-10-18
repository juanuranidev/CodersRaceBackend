import userRepository from "../repositories/user.repository.js";
class UserServices {
  async getLeaderboard() {
    try {
      return await userRepository.getLeaderboard();
    } catch (error) {
      throw new Error(error);
    }
  }
}

const userServices = new UserServices();
export default userServices;
