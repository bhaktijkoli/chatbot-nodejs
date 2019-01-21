import React, { Component } from 'react';

class SignupForm extends Component {
  componentDidMount() {
    document.getElementById('navbar').classList.remove('nav-transparent');
    document.getElementById('navbar').classList.add('nav-raised');
    window.allowTransparent = false;
  }
  render() {
    return (
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
              <button type="submit" className="btn primary">Get Started</button>
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
      firstname: document.getElementById('firstname').value,
      lastname: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
    fh.remove_all_errros('signup_form');
    axios.post(app('auth/register'), data).then(res => {
      if(fh.is_success(res.data)) {
        window.Swal.SingleDialog.fire({
          type: 'info',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        }).then(()=> {
          window.location.href="/"
        })

      } else {
        fh.set_multierrors(res.data);
      }
      fh.show_button();
    })
  }
}

export default SignupForm;
