import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
  componentDidMount() {
      window.addEventListener('scroll', function(e){
        if(window.allowTransparent == true) {
          if(window.scrollY > 70) {
            document.getElementById('navbar').className = "nav-raised";
          } else {
            document.getElementById('navbar').className = "nav-transparent";
          }
        }
      });
  }
  render() {
    return (
      <nav id="navbar" className="nav-transparent">
        <div className="container">
          <div className="nav-logo">
            <a href="/">
              <img src="/img/logo_white.png" alt="Logo" />
            </a>
          </div>
          <ul className="nav-items">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><a href="/">Solutions</a></li>
            <li className="nav-item"><a href="/">Pricing</a></li>
            <li className="nav-item"><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="nav-item-space"></div>
      </nav>
    );
  }
}

export default Navbar;
