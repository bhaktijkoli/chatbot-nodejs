import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';

class Auth extends Component {
  render() {
    return (
      <div id="wrapper">
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </div>
    );
  }
}

export default Auth;
