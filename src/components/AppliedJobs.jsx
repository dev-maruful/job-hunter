import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { getStoredJobsFromDb } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";
import SingleJob from "./SingleJob";

const AppliedJobs = () => {
  const allJobs = useLoaderData();
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    let jobs = [];
    const savedJobs = getStoredJobsFromDb();
    for (const id in savedJobs) {
      const foundJobs = allJobs ? allJobs.find((job) => job.id === id) : "";
      jobs.push(foundJobs);
    }
    setDisplayJobs(jobs);
  }, []);

  // filter remote and onsite jobs
  const handleFilterJobs = (value) => {
    const filteredJobs = displayJobs.filter(
      (job) => job.remote_or_onsite === value
    );
    setDisplayJobs(filteredJobs);
  };

  return (
    <div>
      <h1 className="my-14 text-3xl font-extrabold">Applied Jobs</h1>
      <div className="dropdown dropdown-end w-full mb-8">
        <div className=" text-right w-full">
          <button
            tabIndex={0}
            className="btn m-1 bg-lightGray text-gray border-none hover:bg-mediumDarkGray text-lg font-semibold"
          >
            <span className="mr-2">Filter By</span>{" "}
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </button>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border border-veryLightGray"
        >
          <li>
            <button onClick={() => handleFilterJobs("Remote")}>Remote</button>
          </li>
          <hr className="text-violet-300 my-1" />
          <li>
            <button onClick={() => handleFilterJobs("Onsite")}>Onsite</button>
          </li>
        </ul>
      </div>

      {displayJobs.map((job) => (
        <SingleJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
