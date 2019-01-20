import React, { Component } from 'react';

class Signup extends Component {
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
                <div className="card raised rv">
                  <div className="card-header">
                    <h2 className="card-title">Sign into your account</h2>
                    <p className="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className="card-body">
                    <form id="signup_form" onSubmit={this.onSubmit.bind(this)}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
      );
    }
    onSubmit(e) {
      e.preventDefault();
    }
  }

  export default Signup;
