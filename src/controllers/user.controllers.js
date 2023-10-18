import userServices from "../services/user.services.js";

class UserControllers {
  async getLeaderboard(req, res) {
    const leaderboard = await userServices.getLeaderboard();
    res.status(200).json(leaderboard);
  }
}

const userControllers = new UserControllers();
export default userControllers;
