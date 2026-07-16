import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero-section">
        <div className="overlay">
          <div className="container text-center">
          
            <h1 className="hero-title">
              NETWORKZ SYSTEM
             </h1>
             

            <h2 className="text-warning fw-bold mt-3">
              Skill Assessment Portal
            </h2>

            <p className="hero-text mt-3">
              Master Your Skills. Test Your Knowledge. Build Your Career.
            </p>
              

            <Link to="/login" className="btn btn-primary btn-lg me-3">
               Student Login
              </Link>
              
                

              <Link to="/register" className="btn btn-success btn-lg">
                 Register
               </Link>
              
            
            </div>

          </div>
        </div>

    </>
  );
}

export default Home;