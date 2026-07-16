import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddQuestion() {
  const [formData, setFormData] = useState({
    course: "",
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/questions/add",
        formData
      );

      alert(response.data.message);

      setFormData({
        course: "",
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
      });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
      }
    }
  };

  return (
    <div className="container mt-5 mb-5">

      <div className="card shadow p-4">

        <h2 className="text-center text-primary mb-4">
          Add Question
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Course</label>

            <select
              className="form-select"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option>Python Programming</option>
              <option>Java Programming</option>
              <option>ASP.NET Development</option>
              <option>React Development</option>
              <option>MERN Stack Development</option>
              <option>Digital Marketing</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Question</label>

            <textarea
              className="form-control"
              rows="3"
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label>Option A</label>

            <input
              type="text"
              className="form-control"
              name="optionA"
              value={formData.optionA}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Option B</label>

            <input
              type="text"
              className="form-control"
              name="optionB"
              value={formData.optionB}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Option C</label>

            <input
              type="text"
              className="form-control"
              name="optionC"
              value={formData.optionC}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Option D</label>

            <input
              type="text"
              className="form-control"
              name="optionD"
              value={formData.optionD}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Correct Answer</label>

            <input
              type="text"
              className="form-control"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Save Question
          </button>

        </form>

        <div className="text-center mt-4">
          <Link
            to="/admin/dashboard"
            className="btn btn-secondary"
          >
            Back to Dashboard
          </Link>
        </div>

      </div>

    </div>
  );
}

export default AddQuestion;