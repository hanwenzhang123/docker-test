const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// get all quiz questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.render("questions", { questions });
  } catch (error) {
    res.render("error");
  }
});

// get one quiz question
router.get("/question/:id", async (req, res) => {
  try {
    const number = req.params.id || req.query.id;
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
    res.render("result");
  } catch (error) {
    res.render("error");
  }
});

// create new questions
router.get("/questions/new", async (req, res) => {
  try {
    res.render("form/new");
  } catch (error) {
    res.render("error");
  }
});

// create one quiz question
router.post("/questions", async (req, res) => {
  try {
    const { question, answer } = req.body;
    await Question.create({
      question,
      answer,
    });

    res.redirect("/questions");
  } catch (error) {
    res.render("error");
  }
});

// update one quiz question
router.put("/questions/:id", async (req, res) => {
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
router.get("/questions/:id", async (req, res) => {
  try {
    const _id = req.params.id || req.query.id;
    await Question.deleteOne({ _id });
    res.redirect("/questions");
  } catch (error) {
    res.render("error");
  }
});
router.delete("/questions/:id", async (req, res) => {   //not working
  try {
    const _id = req.params.id || req.query.id;
    await Question.deleteOne({ _id });
    res.redirect("/questions");
  } catch (error) {
    res.render("error");
  }
});

module.exports = router;
