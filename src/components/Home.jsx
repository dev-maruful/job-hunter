import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import JobCategoryItem from "./JobCategoryItem";
import FeaturedJob from "./FeaturedJob";

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
        {initialFeaturedJobs.map((singleJob) => (
          <FeaturedJob key={singleJob.id} singleJob={singleJob} />
        ))}
      </div>

      <button className="bg-blueGradient w-[200px] text-white border-none py-4 rounded-lg text-xl font-extrabold mb-32">
        See All Jobs
      </button>
    </>
  );
};

export default Home;
