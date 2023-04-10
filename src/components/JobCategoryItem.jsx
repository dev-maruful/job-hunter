import React from "react";

const JobCategoryItem = ({ singleCategoryItem }) => {
  const { id, categoryLogo, categoryName, jobsAvailable } = singleCategoryItem;

  return (
    <div key={id} className="category-item">
      <img className="category-item-img" src={categoryLogo} alt="" />
      <h3 className="category-item-h3">{categoryName}</h3>
      <p className="category-item-p ">{jobsAvailable} Jobs Available</p>
    </div>
  );
};

export default JobCategoryItem;
