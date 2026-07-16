const Question = require("../models/Question");

// =======================
// Add Question
// =======================

const addQuestion = async (req, res) => {
  try {
    const {
      course,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      answer,
    } = req.body;

    const newQuestion = new Question({
      course,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      answer,
    });

    await newQuestion.save();

    res.status(201).json({
      message: "Question Added Successfully",
      question: newQuestion,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =======================
// Get All Questions
// =======================

const getQuestions = async (req, res) => {
  try {

    const questions = await Question.find();

    res.status(200).json(questions);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =======================
// Delete Question
// =======================

const deleteQuestion = async (req, res) => {
  try {

    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    res.status(200).json({
      message: "Question Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =======================
// Update Question
// =======================

const updateQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedQuestion) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    res.status(200).json({
      message: "Question Updated Successfully",
      question: updatedQuestion,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addQuestion,
  getQuestions,
  deleteQuestion,
  updateQuestion,
};