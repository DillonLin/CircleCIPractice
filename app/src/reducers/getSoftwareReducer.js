// Reducer For Getting All Software

const initialState = {
  software: [],
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SOFTWARE_OPTIONS": {
      return {...state, software: action.payload}
    }
    case "FETCH_SOFTWARE_OPTIONS_REJECTED": {
      return {...state, error: action.payload}
    }
    default: {
      return {...state};
    }
  }
}
