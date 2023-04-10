import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faCalendarAlt,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { addJobsToDb } from "../utils/fakeDB";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  const { id } = useParams();

  const handleAddToDb = (id) => {
    addJobsToDb(id);
  };

  const [jobData, setJobData] = useState({});

  useEffect(() => {
    const found = jobDetails ? jobDetails.find((job) => job.id === id) : "";
    setJobData(found);
  }, []);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    location,
    contact_information,
  } = jobData;

  return (
    <div>
      <h1 className="my-14 text-3xl font-extrabold">Job Details</h1>
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
        <div className="mb-32">
          <div className="bg-violet-200 p-8 rounded-lg mb-6">
            <p className="text-xl font-extrabold mb-6">Job Details</p>
            <hr className="text-violet-300 mb-6" />
            <div className="flex gap-2 text-gray text-lg font-semibold items-baseline mb-4">
              <FontAwesomeIcon
                className="text-blueGradient"
                icon={faMoneyBillAlt}
              />
              <p className="font-bold">
                <span className="text-darkGray font-extrabold">Salary</span> :{" "}
                {salary} (per month)
              </p>
            </div>
            <div className="flex gap-2 text-gray text-lg font-semibold items-baseline mb-8">
              <FontAwesomeIcon
                className="text-blueGradient"
                icon={faCalendarAlt}
              />
              <p className="font-bold">
                <span className="text-darkGray font-extrabold">Job Title</span>{" "}
                : {job_title}
              </p>
            </div>
            <p className="text-xl font-extrabold mb-6">Contact Information</p>
            <hr className="text-violet-300 mb-6" />
            <div className="flex gap-2 text-gray text-lg font-semibold items-baseline mb-4">
              <FontAwesomeIcon className="text-blueGradient" icon={faPhone} />
              <p className="font-bold">
                <span className="text-darkGray font-extrabold">Phone</span> :{" "}
                {contact_information?.phone}
              </p>
            </div>
            <div className="flex gap-2 text-gray text-lg font-semibold items-baseline mb-4">
              <FontAwesomeIcon
                className="text-blueGradient"
                icon={faEnvelope}
              />
              <p className="font-bold">
                <span className="text-darkGray font-extrabold">Email</span> :{" "}
                {contact_information?.email}
              </p>
            </div>
            <div className="flex gap-2 text-gray text-lg font-semibold items-baseline">
              <FontAwesomeIcon
                className="text-blueGradient"
                icon={faLocationDot}
              />
              <p className="font-bold">
                <span className="text-darkGray font-extrabold">Address</span> :{" "}
                {location}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleAddToDb(id)}
            className="bg-blueGradient w-full text-white border-none py-4 rounded-lg text-xl font-extrabold"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
