const express = require("express");

const router = express.Router();

const {
  registerStudent,
  loginStudent,
  getStudents,
} = require("../controllers/authController");

// Register
router.post("/register", registerStudent);

// Login
router.post("/login", loginStudent);

// Get All Students
router.get("/students", getStudents);

module.exports = router;