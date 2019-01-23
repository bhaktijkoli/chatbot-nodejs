import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

import AddCompany from './AddCompany/AddCompany.jsx';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Route exact path="/company/add" component={AddCompany}/>
      </div>
    );
  }
  componentDidMount() {
    axios.get(api('/auth/get'))
    .then(res => {
      this.props.dispatch({type: "AUTH_USER", payload: res.data})
    })
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
