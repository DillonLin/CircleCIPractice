// Reducer For Getting All Hardware

const initialState = {
  hardware: [],
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_HARDWARE_OPTIONS": {
      return {...state, hardware: action.payload}
    }
    case "FETCH_HARDWARE_OPTIONS_REJECTED": {
      return {...state, error: action.payload}
    }
    default: {
      return {...state};
    }
  }
}
