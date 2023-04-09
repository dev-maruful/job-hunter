import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="normal-case text-3xl font-extrabold">JobHunter</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-bold">
            <li>
              <a>Statistics</a>
            </li>
            <li>
              <a>Applied Jobs</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="bg-blueGradient text-white border-none px-7 py-5 rounded-lg text-xl font-extrabold">
            Start Applying
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
