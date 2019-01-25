import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import Home from './Home/Home.jsx';
import Settings from './Settings/Settings.jsx';
import AddCompany from './AddCompany/AddCompany.jsx';

import PageLoading from './Layout/PageLoading.jsx'
import Sidebar from './Layout/Sidebar.jsx'

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <PageLoading condition={this.props.auth.user}>
          <Sidebar auth={this.props.auth}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/settings" component={Settings}/>
          </Switch>
        </PageLoading>
      </div>
    );
  }
  componentDidMount() {
    axios.get(api('/auth/get'))
    .then(res => {
      this.props.dispatch({type: "AUTH_USER", payload: res.data})
    })
    .catch(err=> {fh.show_errorpage(err)});
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(App));
