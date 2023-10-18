import User from "../models/user.model.js";

class UserRepository {
  async getLeaderboard() {
    const leaderboard = await User.aggregate([
      {
        $lookup: {
          as: "races",
          from: "races",
          localField: "_id",
          foreignField: "user",
        },
      },
      {
        $unwind: "$races",
      },
      {
        $group: {
          _id: "$_id",
          totalRaces: { $sum: 1 },
          name: { $first: "$name" },
          image: { $first: "$image" },
          averageCpm: { $avg: "$races.cpm" },
        },
      },
    ]);
    return leaderboard;
  }
}

const userRepository = new UserRepository();
export default userRepository;
