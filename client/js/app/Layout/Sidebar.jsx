import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EmptyLoading from './EmptyLoading'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.getMenuClass = this.getMenuClass.bind(this);
  }
  render() {
    return (
      <EmptyLoading condition={this.props.auth.user && this.props.auth.websites.length != 0}>
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
              <Link to="/" className="tooltip right"><span className="typcn typcn-messages"></span><p className="tooltip-text">Inbox</p></Link>
            </li>
            <li className={this.getMenuClass('visitors')}>
              <Link to="/visitors" className="tooltip right"><span className="typcn typcn-world"></span><p className="tooltip-text">Visitors</p></Link>
            </li>
            <li className={this.getMenuClass('contacts')}>
              <Link to="/contacts" className="tooltip right"><span className="typcn typcn-contacts"></span><p className="tooltip-text">Contacts</p></Link>
            </li>
            <li className={this.getMenuClass('analytics')}>
              <Link to="/analytics" className="tooltip right"><span className="typcn typcn-chart-bar"></span><p className="tooltip-text">Analytics</p></Link>
            </li>
            <li className={this.getMenuClass('settings')}>
              <Link to="/settings" className="tooltip right"><span className="typcn typcn-cog"></span><p className="tooltip-text">Settings</p></Link>
            </li>
          </ul>
        </div>
      </EmptyLoading>
    );
  }
  getMenuClass(menu) {
    if(menu == this.props.auth.menu) {
      return 'menu-item active';
    } else {
      return 'menu-item';
    }
  }
}

export default Sidebar;
