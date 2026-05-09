import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className={"logo"}>
        <Link to="/" style={styles.logoText}>
          Earnsome
        </Link>
      </div>

      <div className="links">
        <Link to="/" className= "link">"Home" </Link>
        <Link to="/properties" className= "link" >Properties</Link>
        <Link to="/users" className= "link">Users</Link>

        {!token ? (
          <>
            <Link to="/login" className= "link" >Login</Link>
            <Link to="/register" className= "link" >Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className= "button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;