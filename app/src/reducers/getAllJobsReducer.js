// Reducer For Getting All Jobs

const initialState = {
  jobs: [],
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_JOBS": {
      return {...state, jobs: action.payload}
    }
    case "FETCH_ALL_JOBS_REJECTED": {
      return {...state, error: action.payload}
    }
    default: {
      return {...state};
    }
  }
}
