import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    document.title = "Home"
    this.props.dispatch({type: "AUTH_MENU", payload: "inbox"})
  }
  render() {
    return (
      <main>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(Home));
