const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// get all quiz questions for display
router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.render("questions", { questions });
  } catch (error) {
    res.render("error");
  }
});

// get one quiz question for display
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

// render create new quiz questions page
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
    const { number, question, answer } = req.body;

    await Question.create({
      number,
      question,
      answer,
    });

    res.redirect("/questions");
  } catch (error) {
    res.render("error");
  }
});

// render edit quiz questions page
router.get("/questions/:id", async (req, res) => {
  try {
    const _id = req.params.id || req.query.id;
    const question = await Question.findOne({ _id });

    if (!question) {
      res.render("error");
    } else {
      res.render("form/edit", { question });
    }
  } catch (error) {
    res.render("error");
  }
});

// update one quiz question
router.post("/questions/:id", async (req, res) => {
  try {
    const _id = req.params.id || req.query.id;
    const { number, question, answer } = req.body;

    console.log(req.body);

    let foundQuestion = await Question.findOne({ _id });

    if (!foundQuestion) {
      foundQuestion = await Question.create({
        number,
        question,
        answer,
      });
      res.redirect("/questions");
    } else {
      foundQuestion.number = number;
      foundQuestion.question = question;
      foundQuestion.answer = answer;
      await foundQuestion.save();
      res.redirect("/questions");
    }
  } catch (error) {
    res.render("error");
  }
});

// delete one quiz question
router.get("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id || req.query.id;
    await Question.deleteOne({ _id });
    res.redirect("/questions");
  } catch (error) {
    res.render("error");
  }
});

module.exports = router;
