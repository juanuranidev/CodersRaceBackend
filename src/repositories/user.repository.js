import User from "../models/user.model.js";
import mongoose from "mongoose";
class UserRepository {
  async getUserById(userId) {
    const id = new mongoose.Types.ObjectId(userId);

    const user = await User.aggregate([
      {
        $match: { _id: id },
      },
      {
        $lookup: {
          from: "races",
          localField: "_id",
          foreignField: "user",
          as: "races",
        },
      },
      {
        $addFields: {
          racesCompleted: { $size: "$races" },
          averageCpm: { $avg: "$races.cpm" },
        },
      },
      {
        $project: {
          races: 0,
        },
      },
    ]).exec();

    console.log(user);

    return user[0];
  }
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
