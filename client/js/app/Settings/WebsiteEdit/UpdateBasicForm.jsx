import React, { Component } from 'react';
import { If } from 'react-if'
import { withRouter, Link } from 'react-router-dom';

class UpdateBasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
    }
    this.checkValues = this.checkValues.bind(this)
    this.onUpdateClick = this.onUpdateClick.bind(this)
  }
  render() {
    let website = this.props.website;
    return (
      <form id="websiteUpdateBasicForm">
        <h4>Basic Information</h4>
        <div className="input-group inline">
          <div className="col-sm-2">
            <label htmlFor="firstname">Website Name</label>
          </div>
          <div className="col-sm-6">
            <input type="text" id="name" name="text" placeholder="Enter your website name" onChange={this.checkValues} defaultValue={website.name}/>
            <p className="help-block"></p>
          </div>
        </div>
        <div className="input-group inline">
          <div className="col-sm-2">
            <label htmlFor="firstname">Domain</label>
          </div>
          <div className="col-sm-6">
            <input type="text" id="domain" name="text" placeholder="Enter your domain name" onChange={this.checkValues} defaultValue={website.domain}/>
            <p className="help-block"></p>
          </div>
        </div>
        <div className="input-group inline">
          <div className="col-sm-2">
            <label htmlFor="firstname">Website Key</label>
          </div>
          <div className="col-sm-6">
            <input type="text" id="domain" name="text" placeholder="Enter your domain name" defaultValue={website.key} readOnly/>
            <p className="help-block"></p>
          </div>
        </div>
        <div className="input-group inline">
          <div className="col-sm-6 offset-2">
            <If condition={this.state.changed}>
              <button type="button" className="btn primary" onClick={this.onUpdateClick}>Save</button>
            </If>
          </div>
        </div>
      </form>
    );
  }
  checkValues() {
    let website = this.props.website;
    if(document.getElementById('name').value != website.name || document.getElementById('domain').value != website.domain)
    {
      this.setState({changed: true});
    } else {
      this.setState({changed: false});
    }
  }
  onUpdateClick() {
    fh.hide_button();
    fh.remove_all_errros('websiteUpdateBasicForm');
    let data = {
      website: this.props.website.id,
      name:  document.getElementById('name').value,
      domain:  document.getElementById('domain').value,
    }
    axios.post(api('website/update/basic'), data)
    .then(res => {
      if(fh.is_success(res.data)) {
        Toast.show({
          message: 'Website settings updated.',
          ...window.Toast.success
        });
        this.props.update();
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

export default UpdateBasicForm;
