import { Link } from "react-router-dom";

function Dashboard() {

  const student = JSON.parse(localStorage.getItem("student"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("student");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">


      <h2 className="text-center text-primary fw-bold">
        Welcome {student?.name} 👋
      </h2>

      <p className="text-center text-muted">
        Welcome to Networkz Exam Portal
      </p>

      <p className="text-center text-muted mb-5">
        Choose a course and start your skill assessment.
      </p>

      <div className="row g-4">

        {/* Python */}
        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h4>🐍 Python Programming</h4>
            <p>Assess your Python programming skills.</p>
            <Link to="/question/python" className="btn btn-primary">
              Start Assessment
            </Link>
          </div>
        </div>

        {/* Java */}
        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h4>☕ Java Programming</h4>
            <p>Assess your Java programming skills.</p>
            <Link to="/question/java" className="btn btn-primary">
              Start Assessment
            </Link>
          </div>
        </div>

        {/* ASP.NET */}
        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h4>💜 ASP.NET Development</h4>
            <p>Assess your ASP.NET development skills.</p>
            <Link to="/question/dotnet" className="btn btn-primary">
              Start Assessment
            </Link>
          </div>
        </div>

        {/* React */}
        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h4>⚛ React Development</h4>
            <p>Assess your React development skills.</p>
            <Link to="/question/react" className="btn btn-primary">
              Start Assessment
            </Link>
          </div>
        </div>

        {/* MERN */}
        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h4>💻 MERN Stack Development</h4>
            <p>Assess your MERN Stack development skills.</p>
            <Link to="/question/mern" className="btn btn-primary">
              Start Assessment
            </Link>
          </div>
        </div>

        {/* Digital Marketing */}
        <div className="col-md-4">
          <div className="card shadow text-center p-3">
            <h4>📈 Digital Marketing</h4>
            <p>Assess your Digital Marketing skills.</p>
            <Link to="/question/digitalmarketing" className="btn btn-primary">
              Start Assessment
            </Link>

            
          </div>
        </div>

      </div>
<div className="d-flex justify-content-center gap-3 mt-5 mb-4">

  <Link
    to="/"
    className="btn btn-primary"
  >
    BackHome
  </Link>

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

export default Dashboard;