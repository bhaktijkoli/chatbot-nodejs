import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    document.title = "Home"
    this.props.dispatch({type: "AUTH_MENU", payload: "inbox"})
  }
  componentDidUpdate(prevProps) {
    if (this.props.auth.website !== prevProps.auth.website) {
      axios.get(api('/inbox/get/')+this.props.auth.website.id)
    }
  }
  render() {
    return (
      <main>
        <div className="main-content">
          <h1>Home</h1>
        </div>
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
