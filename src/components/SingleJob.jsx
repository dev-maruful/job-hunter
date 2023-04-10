import React from "react";
import { Link } from "react-router-dom";

const SingleJob = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = job;

  return (
    <div className="text-left border border-veryLightGray p-8 rounded-lg mb-6 flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <div className="h-60 w-60 flex items-center bg-lightGray rounded-lg px-12">
          <img src={company_logo} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold mb-2">{job_title}</h2>
          <h2 className="text-2xl text-gray mb-4 font-semibold">
            {company_name}
          </h2>
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
        </div>
      </div>
      <Link to={`/jobDetails/${id}`}>
        <button className="bg-blueGradient w-[200px] text-white border-none py-4 rounded-lg text-xl font-extrabold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SingleJob;
