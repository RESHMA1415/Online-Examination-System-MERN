import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="login-title">
          Admin Login
        </h2>

        <div className="mb-3">
          <label>Username</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter Admin Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>

          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default AdminLogin;