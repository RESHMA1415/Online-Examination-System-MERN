import { Link } from "react-router-dom";

function AdminDashboard() {

  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
  };

  return (
    <div className="container mt-5">

      <h2 className="text-center text-danger fw-bold">
        Networkz Admin Dashboard
      </h2>

      <p className="text-center text-muted mb-5">
        Welcome Administrator
      </p>

      <div className="row g-4">

        {/* Add Question */}
        <div className="col-md-3">
          <div className="card shadow text-center p-4">
            <h3>➕</h3>
            <h5>Add Questions</h5>

            <Link
              to="/admin/add-question"
              className="btn btn-primary mt-3"
            >
              Open
            </Link>

          </div>
        </div>

        {/* Manage Questions */}
        <div className="col-md-3">
          <div className="card shadow text-center p-4">
            <h3>📋</h3>
            <h5>Manage Questions</h5>

            <Link
              to="/admin/questions"
              className="btn btn-success mt-3"
            >
              Open
            </Link>

          </div>
        </div>

        {/* Students */}
        <div className="col-md-3">
          <div className="card shadow text-center p-4">
            <h3>👨‍🎓</h3>
            <h5>View Students</h5>

            <Link
              to="/admin/students"
              className="btn btn-warning mt-3"
            >
              Open
            </Link>

          </div>
        </div>

        {/* Results */}
        <div className="col-md-3">
          <div className="card shadow text-center p-4">
            <h3>📊</h3>
            <h5>View Results</h5>

            <Link to="/admin/results"className="btn btn-warning w-100">
                  Open
</Link>

          </div>
        </div>

      </div>

      <div className="text-center mt-5">

        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default AdminDashboard;