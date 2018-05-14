import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PresentationalNewJobs from '../presentational/presentational_new_jobs.js';

import * as getHardwareOptions from '../../actions/getHardwareAction.js';
import * as getSoftwareOptions from '../../actions/getSoftwareAction.js';
import * as setNewJob from '../../actions/setNewJobAction.js';

class CreateNewJob extends React.Component {
  constructor(props) {
    super(props);
    const {dispatch} = props;
    this.setNewJob = bindActionCreators(setNewJob, dispatch)
  }  

  componentWillMount() {
    this.props.dispatch(getHardwareOptions.getHardwareOptions());
    this.props.dispatch(getSoftwareOptions.getSoftwareOptions());
    this.props.dispatch(setNewJob.getCurrentSettings());
  }

  render() {
    return (
      <div> 
        <PresentationalNewJobs allHardware={this.props.allHardware} allSoftware={this.props.allSoftware} currentSettings={this.props.currentSettings} {...this.setNewJob}/>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    allHardware: store.getHardwareReducer,
    allSoftware: store.getSoftwareReducer,
    currentSettings: store.setNewJobReducer
  }})(CreateNewJob)