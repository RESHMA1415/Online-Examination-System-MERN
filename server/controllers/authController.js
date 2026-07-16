const Student = require("../models/Student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================

const registerStudent = async (req, res) => {
  try {
    const { name, email, phone, course, password } = req.body;

    // Check Existing Email
    const studentExists = await Student.findOne({ email });

    if (studentExists) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Encrypt Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Student
    const student = new Student({
      name,
      email,
      phone,
      course,
      password: hashedPassword,
    });

    await student.save();

    res.status(201).json({
      message: "Student Registered Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= LOGIN =================

const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check Student
    const student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({
        message: "Student not found",
      });
    }

    // Check Password
    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: student._id,
      },
      "networkz_secret_key",
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        phone: student.phone,
        course: student.course,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET ALL STUDENTS =================

const getStudents = async (req, res) => {
  try {

    const students = await Student.find().select("-password");

    res.status(200).json(students);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  registerStudent,
  loginStudent,
  getStudents,
};