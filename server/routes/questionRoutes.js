const express = require("express");

const router = express.Router();

const {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");

// Add Question
router.post("/add", addQuestion);

// Get All Questions
router.get("/", getQuestions);
router.put("/:id", updateQuestion);
 
router.delete("/:id", deleteQuestion);

module.exports = router;