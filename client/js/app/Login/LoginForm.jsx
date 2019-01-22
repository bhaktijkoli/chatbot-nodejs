import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class LoginForm extends Component {
  render() {
    return (
      <form id="login_form" onSubmit={this.onSubmit.bind(this)}>
        <div className="row">
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-addon">
                <input type="email" id="email" name="email" placeholder="Enter your email address" />
                <i className="addon typcn typcn-mail"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-addon">
                <input type="password" id="password" name="password" placeholder="Enter your email address" />
                <i className="addon typcn typcn-key"></i>
              </div>
              <a href="#" className="right">Forgot your password?</a>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group-button">
              <button type="submit" className="btn primary ld-ext-right">Login<div className="ld ld-ring ld-spin"></div></button>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group-button">
              <p>Don't have an account? <Link to="/signup">Create account</Link></p>
            </div>
          </div>
        </div>
      </form>
    );
  }
  onSubmit(e) {
    e.preventDefault();
    fh.hide_button();
    let data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
    axios.post(app('auth/login'), data)
    .then(res => {
      window.location.href="/"
    })
    .catch(res => {
      if(res.response.status == 400) {
        window.Swal.SingleDialog.fire({
          type: 'error',
          text: 'The email address or password you entered is incorrect.'
        })
      }
    })
    .finally(() => {
      fh.show_button();
    })
  }
}

export default LoginForm;
