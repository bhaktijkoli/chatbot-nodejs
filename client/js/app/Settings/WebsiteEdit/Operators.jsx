import React, { Component } from 'react';
import { If } from 'react-if'
import { withRouter, Link } from 'react-router-dom';

class Operators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false,
    }
    this.toggleAddOperator = this.toggleAddOperator.bind(this)
    this.onInviteClick = this.onInviteClick.bind(this)
    this.onRemoveOperator = this.onRemoveOperator.bind(this)
    this.getRole = this.getRole.bind(this)
  }
  render() {
    var usersList = this.props.website.users.map((user, key) => {
      return(
        <tr key={key}>
          <td>{user.email}</td>
          <td>{this.getRole(user)}</td>
          <td>
            <If condition={this.props.website.owner != user.id}>
              <a onClick={e=> this.onRemoveOperator(user, 0)} className="btn small danger"><span className="typcn typcn-trash"></span> </a>
            </If>
          </td>
        </tr>
      )
    })
    var pendingList = this.props.website.invites.map((invite, key) => {
      return(
        <tr key={key}>
          <td>{invite.email}</td>
          <td>Pending</td>
          <td><a onClick={e=> this.onRemoveOperator(invite, 1)} className="btn small danger"><span className="typcn typcn-trash"></span> </a></td>
        </tr>
      )
    })
    return (
      <form id="websiteAddOperator">
        <h4>Website Operators</h4>
        <table id="operators-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersList}
            {pendingList}
          </tbody>
        </table>
        <div className="space20"/>
        <If condition={!this.state.showAddForm}>
          <a className="btn-text" style={{marginLeft:10}} onClick={this.toggleAddOperator}>Add Operator</a>
        </If>
        <If condition={this.state.showAddForm}>
          <div>
            <div className="input-group inline">
              <div className="col-sm-2">
                <label htmlFor="firstname">Operator Email</label>
              </div>
              <div className="col-sm-6">
                <input type="text" id="email" name="email" placeholder="Enter the email of the operator to send invite to.."/>
                <p className="help-block"></p>
              </div>
            </div>
            <div className="input-group inline">
              <div className="col-sm-2">
                <label htmlFor="firstname">Operator Role</label>
              </div>
              <div className="col-sm-6">
                <select id="role" defaultValue={2}>
                  <option value="1">Admin</option>
                  <option value="2">Member</option>
                </select>
                <p className="help-block"></p>
              </div>
            </div>
            <div className="input-group inline">
              <div className="col-sm-6 offset-2">
                <button type="button" className="btn primary" onClick={this.onInviteClick}>Invite</button>
              </div>
            </div>
          </div>
        </If>
      </form>
    );
  }
  toggleAddOperator() {
    this.setState({showAddForm: !this.state.showAddForm});
  }
  onInviteClick() {
    fh.hide_button();
    fh.remove_all_errros('websiteAddOperator');
    let data = {
      website: this.props.website.id,
      email:  document.getElementById('email').value,
      role:  document.getElementById('role').value,
    }
    axios.post(api('website/add/operator'), data)
    .then(res => {
      if(fh.is_success(res.data)) {
      } else {
        fh.set_multierrors(res.data);
      }
    })
    .catch(err=> {fh.show_errorpage(err)})
    .finally(() => {
      fh.show_button();
    })
  }
  onRemoveOperator(user, pending) {
    var text = "Are you sure you want to remove " + user.firstname + "?";
    if(pending == 1) {
      text = "Are you sure you want to remove pending request for " + user.email + "?"
    }
    Swal.YesNo.fire({
      text
    }).then(res => {
      if(res.value == true) {
        let data = {
          website: this.props.website.id,
          user: user.id,
          email: user.email,
          pending: pending,
        }
        axios.post(api('website/remove/operator'), data)
        .then(res => {

        })
        .catch(err=> {fh.show_errorpage(err)});
      }
    })
  }
  getRole(user) {
    if(user.id == this.props.website.owner) {
      return "owner";
    }
    switch (user.role) {
      case '1':
      return 'Admin'
      default:
      return 'Member'
    }
  }
}

export default Operators;
