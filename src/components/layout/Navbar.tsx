import "../../styles/navbar.css";
import { useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { status, userId, handleLogOut } = useContext(AuthContext);
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        MacroSoft
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="btn-section">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profile"> profile</Link>
          </li>

          <li>
            <Link to="/appointments">appointments</Link>
          </li>
          <li>
            <Link to="/history"> history</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
            <Link to="/Update"> Update</Link>
          </li>
          <li>
            {status === "authenticated" && userId ? (
              <button onClick={handleLogOut} className="logout-btn">
                {" "}
                LOGOUT
              </button>
            ) : (
              <a href="/">login</a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
