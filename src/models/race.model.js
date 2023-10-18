import mongoose, { Schema, model } from "mongoose";

const RaceSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    language: {
      type: mongoose.Types.ObjectId,
      ref: "Language",
    },
    code: {
      type: mongoose.Types.ObjectId,
      ref: "Code",
    },
    cpm: {
      type: Number,
      requierd: [true, "The cpm is required"],
    },
    timeInMs: {
      type: Number,
      required: [true, "The time in milliseconds is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Race = model("Race", RaceSchema);
export default Race;
