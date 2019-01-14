import React, { Component } from 'react';

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
                <div className="card raised rv">
                  <div className="card-header">
                    <h2 className="card-title">Sign into your account</h2>
                    <p className="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className="card-body">
                    <form id="login_form">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="error-block">
                            The email address or password you entered is incorrect.
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="input-group">
                            <label for="email">Email</label>
                            <div className="input-addon">
                              <input type="email" id="email" name="email" placeholder="Enter your email address" />
                              <i className="addon typcn typcn-mail"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="input-group">
                            <label for="password">Password</label>
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
                            <p>Don't have an account? <a href="">Create account</a></p>
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
  }

  export default Login;
