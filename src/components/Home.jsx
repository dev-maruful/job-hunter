import React from "react";

const Home = () => {
  return (
    <div>
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

      <div className="mb-8">
        <h2 className="text-5xl font-extrabold mb-4">Job Category List</h2>
        <p className="text-base text-gray font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-4 text-left gap-6">
        <div className="category-item">
          <img className="category-item-img" src="accounts1.png" alt="" />
          <h3 className="category-item-h3">Account & Finance</h3>
          <p className="category-item-p ">300 Jobs Available</p>
        </div>
        <div className="category-item">
          <img className="category-item-img" src="business1.png" alt="" />
          <h3 className="category-item-h3">Account & Finance</h3>
          <p className="category-item-p ">100+ Jobs Available</p>
        </div>
        <div className="category-item">
          <img className="category-item-img" src="social-media1.png" alt="" />
          <h3 className="category-item-h3">Account & Finance</h3>
          <p className="category-item-p ">150 Jobs Available</p>
        </div>
        <div className="category-item">
          <img className="category-item-img" src="chip1.png" alt="" />
          <h3 className="category-item-h3">Account & Finance</h3>
          <p className="category-item-p ">224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
