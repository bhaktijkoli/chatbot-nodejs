import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EmptyLoading from './EmptyLoading'

class Sidebar extends Component {
  render() {
    return (
      <EmptyLoading condition={this.props.auth.user}>
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
              <Link to="/"><span className="typcn typcn-messages"></span></Link>
            </li>
            <li className={this.getMenuClass('visitors')}>
              <Link to="/"><span className="typcn typcn-world"></span></Link>
            </li>
            <li className={this.getMenuClass('contacts')}>
              <Link to="/"><span className="typcn typcn-contacts"></span></Link>
            </li>
            <li className={this.getMenuClass('analytics')}>
              <Link to="/"><span className="typcn typcn-chart-bar"></span></Link>
            </li>
          </ul>
        </div>
      </EmptyLoading>
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
