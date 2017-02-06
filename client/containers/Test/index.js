import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateName } from 'actions/user';

class Test extends Component {

  static propTypes = {
    me: PropTypes.object,
    updateName: PropTypes.func
  }

  static defaultProps = {
    me: {},
    updateName: () => {}
  }

  render() {
    const {
      me,
      updateName
    } = this.props;

    return (
      <div>
        <div>Hello world { me.name }</div>
        <button onClick={() => updateName('Woooah')}>Update!</button>
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
)(Test);
