import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillAlt,
  faCalendarAlt,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

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
    <div>
      <h1 className="my-14 text-3xl font-extrabold">Job Details</h1>;
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
        <div className="p-8 bg-violet-200 rounded-lg">
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
              <span className="text-darkGray font-extrabold">Job Title</span> :{" "}
              {job_title}
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
            <FontAwesomeIcon className="text-blueGradient" icon={faEnvelope} />
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
      </div>
    </div>
  );
};

export default JobDetails;
