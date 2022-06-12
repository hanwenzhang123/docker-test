const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    number: { type: Number, min: 0, unique: true },
    question: { type: String, required: true },
    answer: [
      {
        score: { type: Number, min: 0, required: true },
        text: { type: String, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "alcohol",
  }
);

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
