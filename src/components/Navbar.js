import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="navbar-container">
      <div className="logo-wrapper">
        <h1>ARCE</h1>
      </div>
      <div className="links-wrapper">
        <Link to="/Counter">Counter</Link>
        <button
          onClick={(e) => {
            setIsAuthenticated(false);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
