import userRepository from "../repositories/user.repository.js";
class UserServices {
  async getUserById(userId) {
    try {
      return await userRepository.getUserById(userId);
    } catch (error) {
      throw new Error(error);
    }
  }
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
