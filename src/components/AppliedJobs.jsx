import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const AppliedJobs = () => {
  return (
    <div>
      <h1 className="my-14 text-3xl font-extrabold">Applied Jobs</h1>
      <div className="dropdown dropdown-end w-full">
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
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppliedJobs;
