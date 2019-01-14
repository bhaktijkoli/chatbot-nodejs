import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Layouts/Navbar.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;
