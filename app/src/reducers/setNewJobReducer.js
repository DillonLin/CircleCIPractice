// Reducer For Getting All Hardware

const initialState = {
  name: '',
  softwareId: '',
  applicationId: '',
  hardwareId: '',
  cores: 0,
  softwareInfo: '',
  softwareLabel: '',
  hardwareLabel: '',
  applications: [],
  applicationId: '',
  applicationLabel: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_NEW_NAME": {
      return {...state, name: action.payload.name}
    }
    case "SET_SOFTWARE_ID": {
      return {...state, softwareId: action.payload.softwareId, softwareInfo: action.payload.softwareInfo, softwareLabel: action.payload.softwareLabel, applications: action.payload.applications}
    }
    case "SET_APPLICATION_ID": {
      return {...state, applicationId: action.payload.applicationId, applicationLabel: action.payload.applicationLabel}
    }
    case "SET_HARDWARE_OPTIONS": {
      return {...state, hardwareId: action.payload.hardwareId, cores: action.payload.cores, hardwareLabel: action.payload.hardwareLabel}
    }
    case "GET_CURRENT_SETTINGS": {
      return {...state}
    }
    default: {
      return {...state};
    }
  }
}
