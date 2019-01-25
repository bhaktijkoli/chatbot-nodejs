import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Account extends Component {
  componentDidMount() {
    document.title = "Notifications Settings"
    this.props.dispatch({type: "AUTH_MENU", payload: "settings"})
  }
  render() {
    return (
      <div>
        <h1>Notifications</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(Account));
