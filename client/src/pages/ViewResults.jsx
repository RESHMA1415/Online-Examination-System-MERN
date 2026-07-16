import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/results"
        );

        setResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="container mt-5">

      <h2 className="text-center text-primary mb-4">
        Student Results
      </h2>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Course</th>
            <th>Total</th>
            <th>Correct</th>
            <th>Wrong</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {results.length > 0 ? (
            results.map((result, index) => (
              <tr key={result._id}>
                <td>{index + 1}</td>
                <td>{result.studentName}</td>
                <td>{result.course}</td>
                <td>{result.total}</td>
                <td>{result.correct}</td>
                <td>{result.wrong}</td>
                <td>{result.score}%</td>
                <td>
  <span
    className={
      result.status === "Pass"
        ? "badge bg-success"
        : "badge bg-danger"
    }
  >
    {result.status}
  </span>
</td>
              </tr>
            ))
          ) : (
            
            <tr>
              <td colSpan="7" className="text-center">
                No Results Found
              </td>
            </tr>
          )}

        </tbody>

      </table>

      <div className="text-center">
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

export default ViewResults;