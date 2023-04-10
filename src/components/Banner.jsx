import React from "react";

const Banner = () => {
  return (
    <div className="flex text-left gap-16 items-center mb-32">
      <div className="flex-1">
        <h1 className="text-7xl font-extrabold mb-6 leading-[80px]">
          One Step Closer To Your{" "}
          <span className="text-blueGradient">Dream Job</span>
        </h1>
        <p className="text-gray text-lg font-medium mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="bg-blueGradient text-white border-none px-7 py-5 rounded-lg text-xl font-extrabold">
          Get Started
        </button>
      </div>
      <div className="flex-1">
        <img className="rounded-xl" src="header-img.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
