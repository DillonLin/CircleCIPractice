const initialState = {
  view_existing_jobs: true,
  create_new_jobs: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_TO_JOBS_TAB": {
      return {...state, view_existing_jobs: action.payload.view_existing_jobs, create_new_jobs: action.payload.create_new_jobs}
    }
    case "CHANGE_TO_CREATE_NEW_JOBS_TAB": {
      return {...state, view_existing_jobs: action.payload.view_existing_jobs, create_new_jobs: action.payload.create_new_jobs}
    }
    default: {
      return {...state};
    }
  }
}
