import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Layouts/Navbar.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </div>
    );
  }
}

export default App;
