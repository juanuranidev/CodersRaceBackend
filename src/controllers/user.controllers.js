import userServices from "../services/user.services.js";

class UserControllers {
  async getUserById(req, res) {
    const { userId } = req.query;
    const user = await userServices.getUserById(userId);
    console.log(user);
    res.status(200).json(user);
  }
  async getLeaderboard(req, res) {
    const leaderboard = await userServices.getLeaderboard();
    res.status(200).json(leaderboard);
  }
}

const userControllers = new UserControllers();
export default userControllers;
