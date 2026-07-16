import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Save Token
      localStorage.setItem("token", response.data.token);

      // Save Student Details
      localStorage.setItem(
        "student",
        JSON.stringify(response.data.student)
      );

      alert(response.data.message);

      navigate("/dashboard");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="login-title">
          Student Login
        </h2>

        <div className="mb-3">
          <label>Email Address</label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "🙈" : "👁"}
            </span>

          </div>
        </div>

        <div className="text-end mb-3">
          <a href="#">Forgot Password?</a>
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

export default Login;