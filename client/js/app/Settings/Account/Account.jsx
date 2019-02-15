import React, { Component } from 'react';
import { If } from 'react-if'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameChanged: false,
      emailChanged: false,
      passwordChange: false,
      avatar: ''
    }
    this.checkChangeValues = this.checkChangeValues.bind(this);
  }
  componentDidMount() {
    document.title = "Account Settings"
    this.props.dispatch({type: "AUTH_MENU", payload: "settings"})
    document.getElementById('firstname').value = this.props.auth.user.firstname
    document.getElementById('lastname').value = this.props.auth.user.lastname
    document.getElementById('email').value = this.props.auth.user.email
    this.setState({avatar: Avatar(this.props.auth.user.avatar)})
  }
  render() {
    let user = this.props.auth.user;
    return (
      <div className="container">
        <div className="space50"/>
        <div className="card raised animated fadeInDown">
          <div className="card-header">
            <h2 className="card-title">Account Settings</h2>
            <p className="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <form id="formUpdateAccount" enctype="multipart/form-data">
              <div className="input-group inline">
                <div className="col-sm-2">
                  <label htmlFor="firstname">Firstname</label>
                </div>
                <div className="col-sm-6">
                  <input type="text" id="firstname" name="text" placeholder="Enter your firstname" onChange={this.checkChangeValues}/>
                  <p className="help-block"></p>
                </div>
              </div>
              <div className="input-group inline">
                <div className="col-sm-2">
                  <label htmlFor="lastname">Lastname</label>
                </div>
                <div className="col-sm-6">
                  <input type="text" id="lastname" name="text" placeholder="Enter your lastname" onChange={this.checkChangeValues}/>
                  <p className="help-block"></p>
                </div>
              </div>
              <div className="input-group inline">
                <div className="col-sm-6 offset-2">
                  <If condition={this.state.nameChanged}>
                    <button type="button" className="btn primary" onClick={this.onBasicUpdate.bind(this)}>Save</button>
                  </If>
                </div>
              </div>
              <div className="divider"/>
              <div className="input-group inline">
                <div className="col-sm-2">
                  <label htmlFor="lastname">Email</label>
                </div>
                <div className="col-sm-6">
                  <input type="email" id="email" name="email" onChange={this.checkChangeValues}/>
                </div>
              </div>
              <div className="input-group inline">
                <div className="col-sm-6 offset-2">
                  <If condition={this.state.emailChanged}>
                    <button type="button" className="btn primary" onClick={this.onEmailUpdate.bind(this)}>Update</button>
                  </If>
                </div>
              </div>
              <div className="divider"/>
              <div className="input-group inline">
                <div className="col-sm-2">
                  <label htmlFor="lastname">Avatar</label>
                </div>
                <div className="col-sm-6">
                  <div className="user-avatar-container">
                    <img src={this.state.avatar} className="large" alt="Avatar" />
                    <div className="change-container" onClick={this.openFileInput.bind(this)}>
                      <span className="typcn typcn-pencil"></span>
                      <input type="file" id="avatar" name="avatar" style={{display:'none'}} accept="image/*" onChange={this.onAvatarChange.bind(this)}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"/>
              <div className="input-group inline">
                <div className="col-sm-2">
                  <label htmlFor="password">New Password</label>
                </div>
                <div className="col-sm-6">
                  <input type="password" id="password" name="password" onChange={this.checkChangeValues}/>
                </div>
              </div>
              <If condition={this.state.passwordChange}>
                <div className="input-group inline">
                  <div className="col-sm-2">
                    <label htmlFor="password">Confirm Password</label>
                  </div>
                  <div className="col-sm-6">
                    <input type="password" id="password_confirm" name="password_confirm"/>
                  </div>
                </div>
              </If>
              <If condition={this.state.passwordChange}>
                <div className="input-group inline">
                  <div className="col-sm-6 offset-2">
                    <button type="button" className="btn primary" onClick={this.onPasswordUpdate.bind(this)}>Update</button>
                  </div>
                </div>
              </If>
            </form>
          </div>
        </div>
      </div>
    );
  }
  checkChangeValues() {
    let user = this.props.auth.user;
    if(document.getElementById('firstname').value != user.firstname || document.getElementById('lastname').value != user.lastname)
    {
      this.setState({nameChanged: true});
    } else {
      this.setState({nameChanged: false});
    }
    if(document.getElementById('email').value != user.email)
    {
      this.setState({emailChanged: true});
    } else {
      this.setState({emailChanged: false});
    }
    if(document.getElementById('password').value.length > 0) {
      this.setState({passwordChange: true});
    } else {
      this.setState({passwordChange: false});
    }
  }
  onBasicUpdate() {
    fh.hide_button();
    fh.remove_all_errros('formUpdateAccount');
    let data = {
      firstname:  document.getElementById('firstname').value,
      lastname:  document.getElementById('lastname').value,
    }
    axios.post(api('account/basic/update'), data)
    .then(res => {
      if(fh.is_success(res.data)) {
        Toast.show({
          message: 'Account settings updated.',
          ...window.Toast.success
        });
      } else {
        fh.set_multierrors(res.data);
      }
    })
    .catch(err=> {fh.show_errorpage(err)})
    .finally(() => {
      fh.show_button();
    })
  }
  onEmailUpdate() {
    fh.hide_button();
    fh.remove_all_errros('formUpdateAccount');
    let data = {
      email:  document.getElementById('email').value,
    }
    axios.post(api('account/email/update'), data)
    .then(res => {
      if(fh.is_success(res.data)) {
        Swal.SingleDialog.fire({
          type: "info",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        })
      } else {
        fh.set_multierrors(res.data);
      }
    })
    .catch(err=> {fh.show_errorpage(err)})
    .finally(() => {
      fh.show_button();
    })
  }
  onPasswordUpdate() {
    fh.hide_button();
    fh.remove_all_errros('formUpdateAccount');
    let data = {
      password:  document.getElementById('password').value,
      password_confirm:  document.getElementById('password_confirm').value,
    }
    axios.post(api('account/password/update'), data)
    .then(res => {
      if(fh.is_success(res.data)) {
        Swal.SingleDialog.fire({
          type: "info",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        })
      } else {
        fh.set_multierrors(res.data);
      }
    })
    .catch(err=> {fh.show_errorpage(err)})
    .finally(() => {
      fh.show_button();
    })
  }
  openFileInput() {
    document.getElementById('avatar').click();
  }
  onAvatarChange(e) {
    let form = document.getElementById('formUpdateAccount');
    axios.post(api('account/avatar/update'), new FormData(form))
    .then(res => {
      Toast.show({
        message: 'Avatar updated.',
        ...window.Toast.success
      });
    })
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(Account));
