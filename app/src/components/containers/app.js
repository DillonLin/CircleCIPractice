import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as getJobs from '../../actions/getJobsAction.js';

import Header from './header.js';
import CurrentJobs from './currentJobsPage.js';
import CreateNewJob from './createNewJobPage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }  

  render() {
    return (
      <div className="fe-app">
        <Header />
        {
          this.props.currentPage.view_existing_jobs ? <div><CurrentJobs /></div> : 
          this.props.currentPage.create_new_jobs ? <CreateNewJob /> : null
        }
      </div>
    );
  }
}

export default connect((store) => {
  return {
    allJobs: store.getAllJobsReducer.jobs,
    currentPage: store.changePagesReducer
  }})(App)
