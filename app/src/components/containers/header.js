import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as changePages from '../../actions/changePagesAction.js';

import PresentationalHeader from '../presentational/presentational_header.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    const {dispatch} = props;
    this.changePagesActions = bindActionCreators(changePages, dispatch)
  }  

  render() {
    return (
      <div> <PresentationalHeader currentPage={this.props.currentPage} {...this.changePagesActions} /> </div>
    );
  }
}

export default connect((store) => {
  return {
    currentPage: store.changePagesReducer
  }})(Header)