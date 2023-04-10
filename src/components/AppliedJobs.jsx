import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { getStoredJobsFromDb } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";
import SingleJob from "./SingleJob";

const AppliedJobs = () => {
  const allJobs = useLoaderData();

  let jobs = [];
  const savedJobs = getStoredJobsFromDb();
  for (const id in savedJobs) {
    const foundJobs = allJobs ? allJobs.find((job) => job.id === id) : "";
    jobs.push(foundJobs);
  }

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
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button>Remote</button>
          </li>
          <hr className="text-violet-300 my-1" />
          <li>
            <button>Onsite</button>
          </li>
        </ul>
      </div>

      {jobs.map((job) => (
        <SingleJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
