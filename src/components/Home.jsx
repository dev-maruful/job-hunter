import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import JobCategoryItem from "./JobCategoryItem";
import FeaturedJob from "./FeaturedJob";

const Home = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    fetch("categoryList.json")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  const featuredJobs = useLoaderData();

  return (
    <>
      <Banner />

      <div className="mb-8">
        <h2 className="text-5xl font-extrabold mb-4">Job Category List</h2>
        <p className="text-base text-gray font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-4 text-left gap-6 mb-32">
        {categoryData.map((singleCategoryItem) => (
          <JobCategoryItem
            key={singleCategoryItem.id}
            singleCategoryItem={singleCategoryItem}
          />
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-5xl font-extrabold mb-4">Featured Jobs</h2>
        <p className="text-base text-gray font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-10">
        {featuredJobs
          ? featuredJobs
              .slice(0, showAll ? 6 : 4)
              .map((singleJob) => (
                <FeaturedJob key={singleJob.id} singleJob={singleJob} />
              ))
          : ""}
      </div>

      {!showAll && (
        <button
          onClick={handleShowAll}
          className="bg-blueGradient w-[200px] text-white border-none py-4 rounded-lg text-xl font-extrabold mb-10"
        >
          See All Jobs
        </button>
      )}
    </>
  );
};

export default Home;
