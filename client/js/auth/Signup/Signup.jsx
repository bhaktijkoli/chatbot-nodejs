import React, { Component } from 'react';

import SignupForm from './SignupForm'

class Signup extends Component {
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
                    <SignupForm />
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

  export default Signup;
