import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './Layouts/Navbar.jsx';
import Home from './Home/Home.jsx';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default App;
