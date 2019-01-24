import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div id="sidebar">
        <div className="sidebar-logo">
          <a href="/">
            <img src="/img/logo_white.png" alt="Logo" />
          </a>
        </div>
        <div className="user-avatar-container">
          <img src="https://via.placeholder.com/54" alt="Avatar"/>
          <div className="status"></div>
        </div>
        <ul className="sidebar-menu">
          <li className={this.getMenuClass('inbox')}>
            <Link to="/"><span class="typcn typcn-messages"></span></Link>
          </li>
          <li className={this.getMenuClass('visitors')}>
            <Link to="/"><span class="typcn typcn-world"></span></Link>
          </li>
          <li className={this.getMenuClass('contacts')}>
            <Link to="/"><span class="typcn typcn-contacts"></span></Link>
          </li>
          <li className={this.getMenuClass('analytics')}>
            <Link to="/"><span class="typcn typcn-chart-bar"></span></Link>
          </li>
        </ul>
      </div>
    );
  }
  getMenuClass(menu) {
    if(menu == window.menu) {
      return 'menu-item active';
    } else {
      return 'menu-item';
    }
  }
}

export default Sidebar;
