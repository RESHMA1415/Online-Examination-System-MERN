import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/students"
        );

        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container mt-5">

      <h2 className="text-center text-primary mb-4">
        Registered Students
      </h2>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>

          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.course}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No Students Found
              </td>
            </tr>
          )}

        </tbody>

      </table>

      <Link
        to="/admin/dashboard"
        className="btn btn-primary"
      >
        ← Back to Dashboard
      </Link>

    </div>
  );
}

export default ViewStudents;