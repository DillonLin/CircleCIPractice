const initialState = {
  success: {},
  error: false
}

const postNewJobReducer = (state=initialState, action) => {
  switch(action.type) {
    case "POST_NEW_JOB_SUCCESSFUL": {
      return {...state, success: action.payload}
    }
    case "POST_NEW_JOB_REJECTED": {
      return {...state, error: action.payload}
    }
  }
  return state;
};

export default postNewJobReducer;