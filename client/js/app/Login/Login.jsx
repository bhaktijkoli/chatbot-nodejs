import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';

class Login extends Component {
  componentDidMount() {
    document.getElementById('navbar').classList.remove('nav-transparent');
    document.getElementById('navbar').classList.add('nav-raised');
    window.allowTransparent = false;
  }
  render() {
    return (
      <main>
        <div className="login-clip-path-1"></div>
        <div className="nav-space"></div>
        <section id="login_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 offset-sm-6">
                <div className="card raised animated-fadeIn">
                  <div className="card-header">
                    <h2 className="card-title">Sign into your account</h2>
                    <p className="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className="card-body">
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Login;
