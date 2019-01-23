import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AddWebsite from './AddWebsite/AddWebsite.jsx';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Route exact path="/website/add" component={Home}/>
      </div>
    );
  }
}

export default App;
