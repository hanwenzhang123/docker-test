const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// get all quiz questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    const data = res.status(200).json(questions);
    res.render("home", {data});
  } catch (error) {
    res.render("error");
  }
});

// get one quiz question
router.get("/question/:id", async (req, res) => {
  try {
    const number = req.params.id;
    const question = await Question.findOne({ number });
    const totalQuestionsNum = await Question.count();

    if (!question) {
      res.render("error");
    } else {
      res.render("question", { question, totalQuestionsNum });
    }
  } catch (error) {
    res.render("error");
  }
});

// get all quiz result
router.get("/result", async (req, res) => {
  try {
    // const questions = await Question.find();
    // const data = res.status(200).json(questions);
    res.render("result");
  } catch (error) {
    res.render("error");
  }
});

// create one quiz question
router.post("/questions", async (req, res) => {
  try {
    const { number, title, answer: {score, text} } = req.body;

    const question = await Question.create({
      number,
      title,
      answer: { score, text },
    });

    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

// update one quiz question
router.put("/question/:id", async (req, res) => {
  try {
    const number = req.params.id;
    const { title, answer } = req.body;

    let question = await Question.findOne({ number });

    if (!question) {
      question = await Question.create({
        title,
        answer,
      });
      return res.status(201).json(question);
    } else {
      question.title = title;
      question.answer = answer;
      await question.save();
      return res.status(200).json(question);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

// delete one quiz question
router.delete("/question/:id", async (req, res) => {
  try {
    const number = req.params.id;

    const question = await Question.deleteOne({ number });

    if (question) {
      return res.status(404).json();
    } else {
      return res.status(204).json();
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

module.exports = router;
