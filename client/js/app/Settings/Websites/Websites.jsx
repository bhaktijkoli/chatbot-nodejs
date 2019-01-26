import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom';

class Account extends Component {
  componentDidMount() {
    document.title = "Websites"
    this.props.dispatch({type: "AUTH_MENU", payload: "settings"})
  }
  render() {
    return (
      <div className="container">
        <div className="space50"/>
        <div className="card raised animated fadeInDown">
          <div className="card-header">
            <h2 className="card-title">Website Settings</h2>
            <p className="card-subtitle">Manage your websites.</p>
            <div className="space20"/>
            <Link to="/websites/add" className="btn-text">Add website</Link>
          </div>
        </div>
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
