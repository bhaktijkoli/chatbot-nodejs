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
  }
  render() {
    return (
      <form id="websiteUpdateBasicForm">
        <h4>Website Operators</h4>
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
    fh.remove_all_errros('websiteUpdateBasicForm');
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
}

export default Operators;
