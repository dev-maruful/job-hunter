import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("categoryList.json")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  const featuredJobs = useLoaderData();
  const initialFeaturedJobs = featuredJobs.slice(0, 4);
  console.log(initialFeaturedJobs);

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

      <div className="grid grid-cols-4 text-left gap-6 mb-32">
        {categoryData.map((singleData) => (
          <div key={singleData.id} className="category-item">
            <img
              className="category-item-img"
              src={singleData.categoryLogo}
              alt=""
            />
            <h3 className="category-item-h3">{singleData.categoryName}</h3>
            <p className="category-item-p ">
              {singleData.jobsAvailable} Jobs Available
            </p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-5xl font-extrabold mb-4">Featured Jobs</h2>
        <p className="text-base text-gray font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {initialFeaturedJobs.map((singleJob) => (
          <div className="card rounded-lg p-10 w-full bg-base-100 shadow-xl text-left border border-veryLightGray">
            <div className="card-body">
              <img
                className="h-12 w-1/2 m-0 p-0 mb-8"
                src={singleJob.company_logo}
                alt=""
              />
              <h2 className="card-title text-darkGray font-extrabold text-2xl mb-2">
                {singleJob.job_title}
              </h2>
              <p className="text-xl text-gray font-semibold mb-4">
                {singleJob.company_name}
              </p>
              <div className="flex gap-4 mb-4">
                <button className="text-center text-base font-extrabold py-2 px-5 rounded inline border border-blueGradient text-blueGradient w-[150px]">
                  {singleJob.remote_or_onsite}
                </button>
                <button className="text-center text-base font-extrabold py-2 px-5 rounded inline border border-blueGradient text-blueGradient w-[150px]">
                  {singleJob.fulltime_or_parttime}
                </button>
              </div>
              <div className="flex gap-6 items-center mb-6">
                <div className="flex gap-2 text-gray text-lg font-semibold">
                  <img src="LocationIcon.png" alt="" />
                  <p>{singleJob.location}</p>
                </div>
                <div className="flex gap-2 text-gray text-lg font-semibold">
                  <img src="Frame.png" alt="" />
                  <p>Salary : {singleJob.salary}</p>
                </div>
              </div>
              <button className="bg-blueGradient w-[200px] text-white border-none px-7 py-5 rounded-lg text-xl font-extrabold">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Home;

/*
<div className="category-item">
          <img className="category-item-img" src="accounts1.png" alt="" />
          <h3 className="category-item-h3">Account & Finance</h3>
          <p className="category-item-p ">300 Jobs Available</p>
        </div>
*/
