import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <span>MovieApp</span>
      </div>

      <Link to="/" className="links">
        Home
      </Link>
      <Link to="/about" className="links">
        About
      </Link>
    </div>
  );
};

export default Navbar;
