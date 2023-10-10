import mongoose, { Schema, model } from "mongoose";

const CodeSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "The text of the code is required"],
    },
    language: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Code = model("Code", CodeSchema);
export default Code;
