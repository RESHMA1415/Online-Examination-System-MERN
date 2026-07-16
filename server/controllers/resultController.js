const Result = require("../models/Result");

// =======================
// Save Result
// =======================

const saveResult = async (req, res) => {
  try {
    const {
      studentName,
      course,
      total,
      correct,
      wrong,
      score,
      status,
    } = req.body;

    const result = new Result({
      studentName,
      course,
      total,
      correct,
      wrong,
      score,
      status,
    });

    await result.save();

    res.status(201).json({
      message: "Result Saved Successfully",
      result,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =======================
// Get All Results
// =======================

const getResults = async (req, res) => {
  try {

    const results = await Result.find().sort({
      createdAt: -1,
    });

    res.status(200).json(results);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveResult,
  getResults,
};