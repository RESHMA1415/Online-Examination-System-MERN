const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    correct: {
      type: Number,
      required: true,
    },

    wrong: {
      type: Number,
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },
    
    status: {
  type: String,
  required: true,
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Result", resultSchema);