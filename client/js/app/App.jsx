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
  componentDidMount() {
    axios.get(api('/auth/get'))
    .then(res => {
      console.log(res);
    })
  }
}

export default App;
