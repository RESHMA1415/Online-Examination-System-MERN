import { Link, useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();

  const {
    student = "Reshma",
    course = "",
    total = 0,
    correct = 0,
    wrong = 0,
    score = 0,
    status = score >= 50 ? "Pass" : "Fail",
  } = location.state || {};

  return (
    <div className="container mt-5">

      <div className="card shadow p-5 text-center">

        <h2 className="text-success mb-4">
          🎉 Assessment Completed
        </h2>

        <h3>NETWORKZ SYSTEM</h3>

        <hr />

        <p>
          <strong>Student :</strong> {student}
        </p>

        <p>
          <strong>Course :</strong> {course}
        </p>

        <p>
          <strong>Total Questions :</strong> {total}
        </p>

        <p>
          <strong>Correct Answers :</strong> {correct}
        </p>

        <p>
          <strong>Wrong Answers :</strong> {wrong}
        </p>

        <p>
          <strong>Score :</strong> {score}%
        </p>

        <p>
          <strong>Status :</strong>{" "}
          <span
            className={
              status === "Pass"
                ? "badge bg-success"
                : "badge bg-danger"
            }
          >
            {status}
          </span>
        </p>

        <Link
          to="/dashboard"
          className="btn btn-primary mt-3"
        >
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default Result;