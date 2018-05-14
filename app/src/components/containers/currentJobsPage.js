import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as getJobs from '../../actions/getJobsAction.js';
import PresentationalCurrentJobs from '../presentational/presentational_current_jobs.js';

class CurrentJobs extends React.Component {
  constructor(props) {
    super(props);
    const {dispatch} = props;
    this.getJobsActions = bindActionCreators(getJobs, dispatch)
  }  

  componentWillMount() {
    this.props.dispatch(getJobs.getAllJobs());
  }

  getJobByID(jobID) {
    this.props.dispatch(getJobs.getSpecificJobs(jobID));
  }

  render() {
    if(!this.props.allJobs.jobs) {
      return <div>Null</div>
    }

    return (
      <div>
        <PresentationalCurrentJobs allJobs={this.props.allJobs.jobs.jobs} currentJob={this.props.currentJob} getJobByID={this.getJobByID.bind(this)}/>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    currentPage: store.changePagesReducer,
    allJobs: store.getAllJobsReducer,
    currentJob: store.getSpecificJobReducer
  }})(CurrentJobs)