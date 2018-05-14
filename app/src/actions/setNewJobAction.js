import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api';

export function setNewName(newName) {
  return {
    type: "SET_NEW_NAME",
    payload: {
      name: `${newName}`,
    }
  }
}

export function setSoftwareID(softwareID, softwareDescription, softwareName, applicationArray) {
  return {
    type: "SET_SOFTWARE_ID",
    payload: {
      softwareId: `${softwareID}`,
      softwareInfo: `${softwareDescription}`,
      softwareLabel: `${softwareName}`,
      applications: applicationArray
    }
  }
}

export function setApplicationID(applicationID, applicationName) {
  return {
    type: "SET_APPLICATION_ID",
    payload: {
      applicationId: `${applicationID}`,
      applicationLabel: `${applicationName}`
    }
  }
}

export function setHardware(hardwareID, numberOfCores, hardwareName) {
  return {
    type: "SET_HARDWARE_OPTIONS",
    payload: {
      hardwareId: `${hardwareID}`,
      cores: `${numberOfCores}`,
      hardwareLabel: `${hardwareName}`
    }
  }
}

export function getCurrentSettings() {
  return {
    type: "GET_CURRENT_SETTINGS"
  }
}

export function postNewJob(jobName, softwareID, applicationID, hardwareID, numberOfCores) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/create`, {
      name: `${jobName}`,
      softwareId: `${softwareID}`,
      applicationId: `${applicationID}`,
      hardwareId: `${hardwareID}`,
      cores: `${numberOfCores}`
    })
    .then((response) => {
      dispatch({type: "POST_NEW_JOB_SUCCESSFUL", payload: response.data}); 
    })
    .catch((error) => {
      dispatch({type: "POST_NEW_JOB_REJECTED", payload: error});
    })
  }
}