import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    course: "",
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
  });

  useEffect(() => {
    const loadQuestion = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/questions"
        );

        const question = response.data.find((q) => q._id === id);

        if (question) {
          setFormData({
            course: question.course,
            question: question.question,
            optionA: question.optionA,
            optionB: question.optionB,
            optionC: question.optionC,
            optionD: question.optionD,
            answer: question.answer,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadQuestion();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/questions/${id}`,
        formData
      );

      alert("Question Updated Successfully");

      navigate("/admin/questions");
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="text-center text-warning mb-4">
          Edit Question
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Course</label>

            <input
              type="text"
              className="form-control"
              name="course"
              value={formData.course}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Question</label>

            <textarea
              className="form-control"
              rows="3"
              name="question"
              value={formData.question}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Option A</label>

            <input
              type="text"
              className="form-control"
              name="optionA"
              value={formData.optionA}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Option B</label>

            <input
              type="text"
              className="form-control"
              name="optionB"
              value={formData.optionB}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Option C</label>

            <input
              type="text"
              className="form-control"
              name="optionC"
              value={formData.optionC}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Option D</label>

            <input
              type="text"
              className="form-control"
              name="optionD"
              value={formData.optionD}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correct Answer</label>

            <input
              type="text"
              className="form-control"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100"
          >
            Update Question
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditQuestion;