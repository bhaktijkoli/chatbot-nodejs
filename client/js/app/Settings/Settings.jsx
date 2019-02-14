import React, { Component } from 'react';
import { connect } from "react-redux";
import { Switch, Route, withRouter, NavLink } from 'react-router-dom';

import Account from './Account/Account.jsx'
import Notifications from './Notifications/Notifications.jsx'
import Payments from './Payments/Payments.jsx'
import Websites from './Websites/Websites.jsx'
import WebsiteEdit from './WebsiteEdit/WebsiteEdit.jsx'

class Settings extends Component {
  componentDidMount() {
    document.title = "Settings"
    this.props.dispatch({type: "AUTH_MENU", payload: "settings"})
    var items = document.querySelectorAll('.settings-item');
    items.forEach(e=> e.classList.add('hidden'))
    setTimeout(function () {
      items.forEach((e, key)=> {
        setTimeout(function () {
          e.classList.add('fadeInLeft');
          e.classList.remove('hidden');
        }, 150*key);
      })
    }, 300);
  }
  render() {
    return (
      <main>
        <div className="row no-gutters">
          <div className="col-sm-3">
            <div id="settings-menu">
              <ul>
                <li>
                  <NavLink to="/settings/account" className="settings-item red" activeClassName="active">
                    <div className="settings-icon">
                      <span className="typcn typcn-user"></span>
                    </div>
                    <div className="settings-text">
                      <p className="title">Account Settings</p>
                      <p className="subtitle">Name, Email, Password</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings/notifications" className="settings-item green" activeClassName="active">
                    <div className="settings-icon">
                      <span className="typcn typcn-bell"></span>
                    </div>
                    <div className="settings-text">
                      <p className="title">Notifications</p>
                      <p className="subtitle">Email, Desktop, Mobile</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings/payments" className="settings-item yellow" activeClassName="active">
                    <div className="settings-icon">
                      <span className="typcn typcn-credit-card"></span>
                    </div>
                    <div className="settings-text">
                      <p className="title">Billing & Cards</p>
                      <p className="subtitle">Payment Methods</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings/websites" className="settings-item blue" activeClassName="active">
                    <div className="settings-icon">
                      <span className="typcn typcn-device-desktop"></span>
                    </div>
                    <div className="settings-text">
                      <p className="title">Website Settings</p>
                      <p className="subtitle">Manage your website</p>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-9">
            <Switch>
              <Route path="/settings/account" component={Account} />
              <Route path="/settings/notifications" component={Notifications} />
              <Route path="/settings/payments" component={Payments} />
              <Route path="/settings/websites/:id" component={WebsiteEdit} />
              <Route path="/settings/websites" component={Websites} />
            </Switch>
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(Settings));
