const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    score: Number,
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "user_score",
  }
);

module.exports = mongoose.model("User", userSchema);
