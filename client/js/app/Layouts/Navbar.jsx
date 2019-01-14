import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar" class="nav-transparent nav-raised">
        <div class="container">
          <div class="nav-logo">
            <a href="/">
              <img src="/img/logo_white.png" alt="Logo" />
            </a>
          </div>
          <ul class="nav-items">
            <li class="nav-item"><a href="">Home</a></li>
            <li class="nav-item"><a href="/">Solutions</a></li>
            <li class="nav-item"><a href="/">Pricing</a></li>
            <li class="nav-item"><a href="">Login</a></li>
          </ul>
        </div>
        <div class="nav-item-space"></div>
      </nav>
    );
  }
}

export default Navbar;
