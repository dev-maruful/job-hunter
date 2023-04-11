import { toast } from "react-hot-toast";

const addJobsToDb = (id) => {
  let addedJobs = {};

  //get the selected jobs from local storage
  const selectedJobs = localStorage.getItem("added-jobs");
  if (selectedJobs) {
    addedJobs = JSON.parse(selectedJobs);
  }

  // add quantity
  const quantity = addedJobs[id];
  if (quantity) {
    toast.error("Already applied for this job");
  } else {
    addedJobs[id] = 1;
    toast.success("Successfully applied for this job");
  }
  localStorage.setItem("added-jobs", JSON.stringify(addedJobs));
};

const getStoredJobsFromDb = () => {
  let addedJobs = {};

  //get the selected jobs from local storage
  const selectedJobs = localStorage.getItem("added-jobs");
  if (selectedJobs) {
    addedJobs = JSON.parse(selectedJobs);
  }
  return addedJobs;
};

export { addJobsToDb, getStoredJobsFromDb };
