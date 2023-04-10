import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar mb-12">
      <div className="navbar-start">
        <Link to="/" className="normal-case text-3xl font-extrabold">
          JobHunter
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-bold">
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/appliedJobs">Applied Jobs</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="bg-blueGradient text-white border-none px-7 py-3 rounded-lg text-xl font-extrabold">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
