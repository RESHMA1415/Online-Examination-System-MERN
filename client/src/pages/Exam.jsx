import { Link } from "react-router-dom";

function Exam() {
  return (
    <div className="container mt-5">

      <div className="card shadow p-5">

        <h2 className="text-center text-primary mb-4">
          Assessment Instructions
        </h2>

        <ul className="list-group mb-4">

          <li className="list-group-item">
            📚 Course : Python Programming
          </li>

          <li className="list-group-item">
            ❓ Total Questions : 20
          </li>

          <li className="list-group-item">
            ⏱ Duration : 30 Minutes
          </li>

          <li className="list-group-item">
            ✔ Passing Marks : 50%
          </li>

          <li className="list-group-item">
            🚫 No Negative Marking
          </li>

          <li className="list-group-item">
            ⚠ Do not refresh the page during the exam.
          </li>

        </ul>

        <div className="text-center">

          <Link
            to="/question"
            className="btn btn-success btn-lg"
          >
            Start Exam
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Exam;    