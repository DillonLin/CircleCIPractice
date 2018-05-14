import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api';

export function getAllJobs() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/jobs`)
    .then((response) => {
      dispatch({type: "FETCH_ALL_JOBS", payload: response.data}); 
    })
    .catch((error) => {
      dispatch({type: "FETCH_ALL_JOBS_REJECTED", payload: error});
    })
  }
}

export function getSpecificJobs(jobID) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/jobs/${jobID}`)
    .then((response) => {
      dispatch({type: "FETCH_SPECIFIC_JOBS", payload: response.data}); 
    })
    .catch((error) => {
      dispatch({type: "FETCH_SPECIFIC_JOBS_REJECTED", payload: error});
    })
  }
}