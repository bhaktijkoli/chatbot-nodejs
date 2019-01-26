import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddWebsiteForm extends Component {
  render() {
    return (
      <form id="formAddWebsite" onSubmit={this.onSubmit.bind(this)}>
        <div className="row">
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="name">Website Name</label>
              <input type="text" id="name" name="text" placeholder="Enter your website name here" />
              <p className="help-block"></p>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="name">Website Domain</label>
              <input type="text" id="domain" name="text" placeholder="Enter your domain name here" />
              <p className="help-block"></p>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group-button">
              <button type="submit" className="btn primary">Next</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
  onSubmit(e) {
    e.preventDefault();
    fh.hide_button();
    fh.remove_all_errros('formAddWebsite');
    let data = {
      name:  document.getElementById('name').value,
      domain:  document.getElementById('domain').value,
    }
    axios.post(api('website/add'), data)
    .then(res => {
      if(fh.is_success(res.data)) {
        this.props.callback(res.data.message);
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

export default AddWebsiteForm;
