// Reducer For Getting Specific Software

const initialState = {
  specificJob: {},
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SPECIFIC_JOBS": {
      return {...state, specificJob: action.payload}
    }
    case "FETCH_SPECIFIC_JOBS_REJECTED": {
      return {...state, error: action.payload}
    }
    default: {
      return {...state};
    }
  }
}
