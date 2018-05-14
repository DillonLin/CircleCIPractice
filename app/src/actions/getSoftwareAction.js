import axios from 'axios';

export function getSoftwareOptions() {
  return function(dispatch) {
    axios.get(`http://localhost:3000/api/software`)
    .then((response) => {
      dispatch({type: "FETCH_SOFTWARE_OPTIONS", payload: response.data}); 
    })
    .catch((error) => {
      dispatch({type: "FETCH_SOFTWARE_OPTIONS_REJECTED", payload: error});
    })
  }
}
