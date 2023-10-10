import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
    },
    image: {
      type: String,
    },
    githubUsername: {
      type: String,
      required: [true, "The github username is required"],
    },
    githubId: {
      type: String,
      required: [true, "The github id is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model("User", UserSchema);
export default User;
