import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import pythonQuestions from "../data/pythonQuestions";
import javaQuestions from "../data/javaQuestions";
import dotnetQuestions from "../data/dotnetQuestions";
import reactQuestions from "../data/reactQuestions";
import mernQuestions from "../data/mernQuestions";
import digitalMarketingQuestions from "../data/digitalMarketingQuestions";

function Question() {
  const navigate = useNavigate();
  const { course } = useParams();

  let questions = [];
  let courseName = "";

  switch (course) {
    case "python":
      questions = pythonQuestions;
      courseName = "Python Programming";
      break;

    case "java":
      questions = javaQuestions;
      courseName = "Java Programming";
      break;

    case "dotnet":
      questions = dotnetQuestions;
      courseName = "ASP.NET Development";
      break;

    case "react":
      questions = reactQuestions;
      courseName = "React Development";
      break;

    case "mern":
      questions = mernQuestions;
      courseName = "MERN Stack";
      break;

    case "digitalmarketing":
      questions = digitalMarketingQuestions;
      courseName = "Digital Marketing";
      break;

    default:
      questions = pythonQuestions;
      courseName = "Python Programming";
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  async function submitExam() {

  let correct = 0;

  questions.forEach((question, index) => {
    if (answers[index] === question.answer) {
      correct++;
    }
  });

  const wrong = questions.length - correct;

  const score = Math.round((correct / questions.length) * 100);

  const status = score >= 50 ? "Pass" : "Fail";

  const student = JSON.parse(localStorage.getItem("student"));

  try {

    await axios.post(
  "http://localhost:5000/api/results/save",
  {
    studentName: student.name,
    course: courseName,
    total: questions.length,
    correct,
    wrong,
    score,
    status,
  }
);
  } catch (error) {
    console.log(error);
  }

  navigate("/result", {
    state: {
      student: student.name,
      course: courseName,
      total: questions.length,
      correct,
      wrong,
      score,
      status,
    },
  });
}

  useEffect(() => {
    if (timeLeft <= 0) {
      submitExam();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3>{courseName}</h3>
            <p className="mb-0">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          <h4 className="text-danger">
            ⏱ {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h4>
        </div>

        <hr />

        <h4 className="mb-4">
          {questions[currentQuestion].question}
        </h4>

        {questions[currentQuestion].options.map((option, index) => (
          <div className="form-check mb    -3" key={index}>
            <input
              className="form-check-input"
              type="radio"
              id={`option${index}`}
              name="answer"
              value={option}
              checked={answers[currentQuestion] === option}
              onChange={() => handleAnswer(option)}                              
            />

            <label
              className="form-check-label"
              htmlFor={`option${index}`}
            >
              {option}
            </label>
          </div>
        ))}

        <div className="d-flex justify-content-between mt-4">

          <button
            className="btn btn-secondary"
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              className="btn btn-success"
              onClick={submitExam}
            >
              Submit Exam
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={nextQuestion}
            >
              Next
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default Question; 0