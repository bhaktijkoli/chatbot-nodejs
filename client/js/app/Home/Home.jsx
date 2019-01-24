import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    document.title = "Home"
    window.menu = 'inbox';
  }
  render() {
    return (
      <main>
      </main>
    );
  }
}

export default Home;
