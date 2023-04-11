import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-12 flex flex-col gap-5 md:flex-row items-center justify-between text-center">
      <div>
        <Link to="/" className="normal-case text-3xl font-extrabold">
          JobHunter
        </Link>
      </div>
      <div>
        <ul className="flex flex-col gap-3 md:flex-row md:gap-10 px-1 text-base font-bold">
          <li className="block">
            <Link to="/statistics">Statistics</Link>
          </li>
          <li className="block">
            <Link to="/appliedJobs">Applied Jobs</Link>
          </li>
          <li className="block">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-blueGradient text-white border-none px-7 py-3 rounded-lg text-xl font-extrabold">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
