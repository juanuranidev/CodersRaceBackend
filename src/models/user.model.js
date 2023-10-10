import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: Sring,
      required: [true, "The name is required"],
    },
    image: {
      type: String,
    },
    accessToken: {
      type: Sring,
      required: [true, "The access token is required"],
    },
    githubUsername: {
      type: Sring,
      required: [true, "The github username is required"],
    },
    githubId: {
      type: Sring,
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
