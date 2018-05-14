import { combineReducers } from 'redux';
import changePagesReducer from './changePagesReducer.js';
import getAllJobsReducer from './getAllJobsReducer.js';
import getHardwareReducer from './getHardwareReducer.js';
import getSoftwareReducer from './getSoftwareReducer.js';
import getSpecificJobReducer from './getSpecificJobReducer.js';
import postNewJobReducer from './postNewJobReducer.js';
import setNewJobReducer from './setNewJobReducer.js';

const rootReducer = combineReducers({
  changePagesReducer,
  getAllJobsReducer,
  getHardwareReducer,
  getSoftwareReducer,
  getSpecificJobReducer,
  postNewJobReducer,
  setNewJobReducer
});

export default rootReducer;
