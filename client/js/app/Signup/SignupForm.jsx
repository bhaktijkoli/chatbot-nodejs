import React, { Component } from 'react';

class SignupForm extends Component {
  componentDidMount() {
    document.getElementById('navbar').classList.remove('nav-transparent');
    document.getElementById('navbar').classList.add('nav-raised');
    window.allowTransparent = false;
  }
  render() {
    return (

      <form id="signup_form">
        <div className="row">
          <div className="col-sm-6">
            <div className="input-group">
              <label htmlFor="firstname">First Name</label>
              <div className="input-addon">
                <input type="text" id="firstname" name="firstname" placeholder="Enter your first name"/>
              </div>
              <p className="help-block"></p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group">
              <label htmlFor="lastname">Last Name</label>
              <div className="input-addon">
                <input type="text" id="lastname" name="lastname" placeholder="Enter your last name"/>
              </div>
              <p className="help-block"></p>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-addon">
                <input type="email" id="email" name="email" placeholder="Enter your email address"/>
                <i className="addon typcn typcn-mail"></i>
              </div>
              <p className="help-block"></p>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-addon">
                <input type="password" id="password" name="password" placeholder="Enter your email address"/>
                <i className="addon typcn typcn-key"></i>
              </div>
              <p className="help-block"></p>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group-button">
              <button type="submit" className="btn primary ld-ext-right">Get Started<div className="ld ld-ring ld-spin"></div></button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignupForm;
