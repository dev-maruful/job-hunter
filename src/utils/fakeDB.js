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
    alert("product already added");
  } else {
    addedJobs[id] = 1;
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
