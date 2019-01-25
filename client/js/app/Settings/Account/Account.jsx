import React, { Component } from 'react';
import { If } from 'react-if'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameChanged: false,
    }
    this.checkChangeValues = this.checkChangeValues.bind(this);
  }
  componentDidMount() {
    document.title = "Account Settings"
    this.props.dispatch({type: "AUTH_MENU", payload: "settings"})
    document.getElementById('firstname').value = this.props.auth.user.firstname
    document.getElementById('lastname').value = this.props.auth.user.lastname
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
            <form id="formUpdateAccount">
              <div className="input-group inline">
                <div className="row">
                  <div className="col-sm-2">
                    <label htmlFor="firstname">Firstname</label>
                  </div>
                  <div className="col-sm-6">
                    <input type="text" id="firstname" name="text" placeholder="Enter your firstname" onChange={this.checkChangeValues}/>
                  </div>
                </div>
              </div>
              <div className="input-group inline">
                <div className="row">
                  <div className="col-sm-2">
                    <label htmlFor="lastname">Lastname</label>
                  </div>
                  <div className="col-sm-6">
                    <input type="text" id="lastname" name="text" placeholder="Enter your lastname" onChange={this.checkChangeValues}/>
                  </div>
                </div>
              </div>
              <div className="input-group inline">
                <div className="row">
                  <div className="col-sm-6 offset-2">
                    <If condition={this.state.nameChanged}>
                      <button className="btn primary">Save</button>
                    </If>
                  </div>
                </div>
              </div>
              <div className="divider"/>
              <div className="input-group inline">
                <div className="row">
                  <div className="col-sm-2">
                    <label htmlFor="lastname">Email</label>
                  </div>
                  <div className="col-sm-6">
                    <input type="email" value={user.email} disabled/>
                    <a className="btn-text">Change email</a>
                  </div>
                </div>
              </div>
              <div className="divider"/>
              <div className="input-group inline">
                <div className="row">
                  <div className="col-sm-2">
                    <label htmlFor="lastname">Password</label>
                  </div>
                  <div className="col-sm-6">
                    <a className="btn-text">Change password</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  checkChangeValues() {
    if(document.getElementById('firstname').value != this.props.auth.user.firstname || document.getElementById('lastname').value != this.props.auth.user.lastname)
    {
      this.setState({nameChanged: true});
    } else {
      this.setState({nameChanged: false});
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(Account));
