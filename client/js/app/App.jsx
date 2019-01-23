import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AddCompany from './AddCompany/AddCompany.jsx';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Route exact path="/company/add" component={AddCompany}/>
      </div>
    );
  }
}

export default App;
