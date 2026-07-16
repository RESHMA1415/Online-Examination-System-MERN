const express = require("express");

const router = express.Router();

const {
  saveResult,
  getResults,
} = require("../controllers/resultController");

// Save Result
router.post("/save", saveResult);

// Get All Results
router.get("/", getResults);

module.exports = router;