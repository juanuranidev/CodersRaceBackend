import { Schema, model, Model } from "mongoose";

const LanguageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Language = model("Language", LanguageSchema);
export default Language;
