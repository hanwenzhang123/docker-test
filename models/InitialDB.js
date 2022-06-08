const mongoose = require("mongoose");
const Question = require("./Question.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const seedQuestions = [
  {
    number: 1,
    question: "How often do you have a drink containing alcohol?",
    answer: [
      { score: 0, text: "Never (Skip to Questions 9-10)" },
      { score: 1, text: "Monthly or less" },
      { score: 2, text: "2 to 4 times a month" },
      { score: 3, text: "2 to 3 times a week" },
      { score: 4, text: "4 or more times a week" },
    ],
  },
  {
    number: 2,
    question:
      "How many drinks containing alcohol do you have on a typical day when you are drinking?",
    answer: [
      { score: 0, text: "1 or 2" },
      { score: 1, text: "3 or 4" },
      { score: 2, text: "5 or 6" },
      { score: 3, text: "7, 8, or 9" },
      { score: 4, text: "10 or more" },
    ],
  },
  {
    number: 3,
    question: "How often do you have six or more drinks on one occasion?",
    answer: [
      { score: 0, text: "Never" },
      { score: 1, text: "Less than monthly" },
      { score: 2, text: "Monthly" },
      { score: 3, text: "Weekly" },
      { score: 4, text: "Daily or almost daily" },
    ],
  },
  {
    number: 4,
    question:
      "How often during the last year have you found that you were not able to stop drinking once you had started?",
    answer: [
      { score: 0, text: "Never" },
      { score: 1, text: "Less than monthly" },
      { score: 2, text: "Monthly" },
      { score: 3, text: "Weekly" },
      { score: 4, text: "Daily or almost daily" },
    ],
  },
  {
    number: 5,
    question:
      "How often during the last year have you failed to do what was normally expected from you because of drinking?",
    answer: [
      { score: 0, text: "Never" },
      { score: 1, text: "Less than monthly" },
      { score: 2, text: "Monthly" },
      { score: 3, text: "Weekly" },
      { score: 4, text: "Daily or almost daily" },
    ],
  },
  {
    number: 6,
    question:
      "How often during the last year have you been unable to remember what happened the night before because you had been drinking?",
    answer: [
      { score: 0, text: "Never" },
      { score: 1, text: "Less than monthly" },
      { score: 2, text: "Monthly" },
      { score: 3, text: "Weekly" },
      { score: 4, text: "Daily or almost daily" },
    ],
  },
  {
    number: 7,
    question:
      "How often during the last year have you needed an alcoholic drink first thing in the morning to get yourself going after a night of heavy drinking?",
    answer: [
      { score: 0, text: "Never" },
      { score: 1, text: "Less than monthly" },
      { score: 2, text: "Monthly" },
      { score: 3, text: "Weekly" },
      { score: 4, text: "Daily or almost daily" },
    ],
  },
  {
    number: 8,
    question:
      "How often during the last year have you had a feeling of guilt or remorse after drinking?",
    answer: [
      { score: 0, text: "Never" },
      { score: 1, text: "Less than monthly" },
      { score: 2, text: "Monthly" },
      { score: 3, text: "Weekly" },
      { score: 4, text: "Daily or almost daily" },
    ],
  },
  {
    number: 9,
    question:
      "Have you or someone else been injured as a result of your drinking?",
    answer: [
      { score: 0, text: "No" },
      { score: 2, text: "Yes, but not in the last year" },
      { score: 4, text: "Yes, during the last year" },
    ],
  },
  {
    number: 10,
    question:
      "Has a relative, friend, doctor, or another health professional expressed concern about your drinking or suggested you cut down?",
    answer: [
      { score: 0, text: "No" },
      { score: 2, text: "Yes, but not in the last year" },
      { score: 4, text: "Yes, during the last year" },
    ],
  },
];

const insertData = async () => {
  await Question.deleteMany({});

  Question.insertMany(seedQuestions)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

insertData();
