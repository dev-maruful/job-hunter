import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  console.log(jobDetails);

  const { id } = useParams();
  console.log(id);

  const found = jobDetails ? jobDetails.find((job) => job.id === id) : "";
  console.log(found);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    location,
    contact_information,
  } = found;

  return (
    <div className="grid grid-cols-3 w-full text-left gap-6">
      <div className="col-span-2">
        <p className="text-base font-medium text-gray mb-6">
          <b className="text-black font-extrabold">Job Description:</b>{" "}
          {job_description}
        </p>
        <p className="text-base font-medium text-gray mb-6">
          <b className="text-black font-extrabold">Job Responsibility:</b>{" "}
          {job_responsibility}
        </p>
        <div className="mb-6">
          <p className="text-base font-extrabold mb-4">
            <b>Education Requirements:</b>
          </p>
          <p className="text-base font-medium text-gray">
            {educational_requirements}
          </p>
        </div>
        <div className="mb-6">
          <p className="text-base font-extrabold mb-4">
            <b>Experiences:</b>
          </p>
          <p className="text-base font-medium text-gray">{experiences}</p>
        </div>
      </div>
      <div>hello2</div>
    </div>
  );
};

export default JobDetails;
