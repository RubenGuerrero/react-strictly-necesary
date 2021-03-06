import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateName } from 'actions/user';

class App extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    const {
      children
    } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}

const actionCreators = {
  updateName
};

export default connect(
  state => ({
    me: state.me,
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App);
