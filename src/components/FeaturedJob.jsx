import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FeaturedJob = ({ singleJob }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = singleJob;

  return (
    <div className="card rounded-lg p-10 w-full bg-base-100 shadow-xl text-left border border-veryLightGray">
      <div className="card-body">
        <img className="h-12 w-1/2 m-0 p-0 mb-8" src={company_logo} alt="" />
        <h2 className="card-title text-darkGray font-extrabold text-2xl mb-2">
          {job_title}
        </h2>
        <p className="text-xl text-gray font-semibold mb-4">{company_name}</p>
        <div className="flex gap-4 mb-4">
          <button className="text-center text-base font-extrabold py-2 px-5 rounded inline border border-blueGradient text-blueGradient w-[150px]">
            {remote_or_onsite}
          </button>
          <button className="text-center text-base font-extrabold py-2 px-5 rounded inline border border-blueGradient text-blueGradient w-[150px]">
            {fulltime_or_parttime}
          </button>
        </div>
        <div className="flex gap-6 items-center mb-6">
          <div className="flex gap-2 text-gray text-lg font-semibold">
            <img src="LocationIcon.png" alt="" />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 text-gray text-lg font-semibold">
            <img src="Frame.png" alt="" />
            <p>Salary : {salary}</p>
          </div>
        </div>
        <Link to={`/jobDetails/${id}`}>
          <button className="bg-blueGradient w-[200px] text-white border-none py-4 rounded-lg text-xl font-extrabold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJob;
