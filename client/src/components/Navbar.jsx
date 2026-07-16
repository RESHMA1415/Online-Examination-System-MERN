import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Networkz Logo"
            className="logo me-3"
          />

          {/* <div>
            <h4 className="mb-0 fw-bold">EXAM</h4>
            <small className="text-light">
              Skill Assessment Portal
            </small>
          </div> */}
        </Link>

        <div>
          <div className="d-flex gap-2">

  <Link to="/login" className="btn btn-light fw-bold">
    Login
  </Link>

  <Link to="/register" className="btn btn-warning fw-bold">
    Register
  </Link>

  <Link to="/admin/login" className="btn btn-dark fw-bold">
    Admin
  </Link>

</div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;