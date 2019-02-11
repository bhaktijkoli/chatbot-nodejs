import React, { Component } from 'react';
import { If } from 'react-if'
import { withRouter, Link } from 'react-router-dom';

class WebsiteEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicChange: false,
    }
    this.checkChangeValues = this.checkChangeValues.bind(this)
    this.onBasicUpdate = this.onBasicUpdate.bind(this)
  }
  render() {
    let website = this.props.website;
    return (
      <form id="websiteEditForm">
        <h4>Basic Information</h4>
        <div className="input-group inline">
          <div className="col-sm-2">
            <label htmlFor="firstname">Website Name</label>
          </div>
          <div className="col-sm-6">
            <input type="text" id="name" name="text" placeholder="Enter your website name" onChange={this.checkChangeValues} defaultValue={website.name}/>
            <p className="help-block"></p>
          </div>
        </div>
        <div className="input-group inline">
          <div className="col-sm-2">
            <label htmlFor="firstname">Domain</label>
          </div>
          <div className="col-sm-6">
            <input type="text" id="domain" name="text" placeholder="Enter your domain name" onChange={this.checkChangeValues} defaultValue={website.domain}/>
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
            <If condition={this.state.basicChange}>
              <button type="button" className="btn primary" onClick={this.onBasicUpdate}>Save</button>
            </If>
          </div>
        </div>
      </form>
    );
  }
  checkChangeValues() {
    let website = this.props.website;
    if(document.getElementById('name').value != website.name || document.getElementById('domain').value != website.domain)
    this.setState({basicChange: true});
    else this.setState({basicChange: false});
  }
  onBasicUpdate() {
    fh.hide_button();
    fh.remove_all_errros('websiteEditForm');
    let data = {
      website: this.props.website.id,
      name:  document.getElementById('name').value,
      domain:  document.getElementById('domain').value,
    }
    axios.post(api('website/update/basic'), data)
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

export default WebsiteEdit;
