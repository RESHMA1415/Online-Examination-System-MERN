import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManageQuestions() {
  const [questions, setQuestions] = useState([]);

  // Fetch all questions
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/questions"
      );

      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Load questions when page opens
  useEffect(() => {
    fetchQuestions();
  }, []);

  // Delete question
  const deleteQuestion = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this question?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/questions/${id}`
      );

      alert("Question Deleted Successfully");

      fetchQuestions();
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="text-center text-primary mb-4">
        Manage Questions
      </h2>

      

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Course</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {questions.length > 0 ? (
            questions.map((question, index) => (
              <tr key={question._id}>
                <td>{index + 1}</td>
                <td>{question.course}</td>
                <td>{question.question}</td>
                <td>{question.answer}</td>
                <td>

      <Link
    to={`/admin/edit-question/${question._id}`}
    className="btn btn-warning btn-sm me-2"
  >
    Edit
  </Link>

  <button
    className="btn btn-danger btn-sm"
    onClick={() => deleteQuestion(question._id)}
  >
    Delete
  </button>

</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No Questions Found
              </td>
            </tr>
          )}

        </tbody>

      </table>
      <div className="mb-3">
        <Link
          to="/admin/dashboard"
          className="btn btn-primary"
        >
          ← Back to Dashboard
        </Link>
      </div>

    </div>
  );
}

export default ManageQuestions;