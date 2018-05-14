import axios from 'axios';

export function getHardwareOptions() {
  return function(dispatch) {
    axios.get(`http://localhost:3000/api/hardware`)
    .then((response) => {
      dispatch({type: "FETCH_HARDWARE_OPTIONS", payload: response.data}); 
    })
    .catch((error) => {
      dispatch({type: "FETCH_HARDWARE_OPTIONS_REJECTED", payload: error});
    })
  }
}
