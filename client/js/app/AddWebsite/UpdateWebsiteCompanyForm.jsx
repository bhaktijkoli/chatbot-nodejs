import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateWebsiteCompanyForm extends Component {
  render() {
    return (
      <form id="formUpdateWebsiteCompany" onSubmit={this.onSubmit.bind(this)}>
        <div className="row">
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="name">Company Name</label>
              <input type="name" id="company" name="text" placeholder="Enter your company name here" />
              <p className="help-block"></p>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="industry">Industry</label>
              <select id="industry" name="industry">
                <option value="" disabled>Select your industry</option>
                <option value="Automotive">Automotive</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Finance">Finance</option>
                <option value="Games &amp; Gambling">Games &amp; Gambling</option>
                <option value="Government / Non-profit">Government / Non-profit</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Human Resources">Human Resources</option>
                <option value="IT">IT</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Marketing">Marketing</option>
                <option value="Media &amp; Telecom">Media &amp; Telecom</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Retail">Retail</option>
                <option value="Software">Software</option>
                <option value="Support Services">Support Services</option>
                <option value="Travel">Travel</option>
                <option value="Web Apps">Web Apps</option>
                <option value="Web Hosting">Web Hosting</option>
                <option value="Wholesale">Wholesale</option>
                <option value="Other">Other</option>
              </select>
              <p className="help-block"></p>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="size">Company Size</label>
              <select id="size" name="size">
                <option disabled>Select number of employees</option>
                <option value="0">1-4</option>
                <option value="1">5-9</option>
                <option value="2">10-49</option>
                <option value="3">50-199</option>
                <option value="4">200-499</option>
                <option value="5">500-999</option>
                <option value="6">1,000+</option>
              </select>
              <p className="help-block"></p>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="email">Company Audience</label>
              <select id="audience" name="audience">
                <option disabled>Select audience</option>
                <option value="0">B2C</option>
                <option value="1">B2B</option>
                <option value="2">Internal</option>
              </select>
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
    fh.remove_all_errros('formUpdateWebsiteCompany');
    let data = {
      website: this.props.website.id,
      company:  document.getElementById('company').value,
      industry:  document.getElementById('industry').value,
      size:  document.getElementById('size').value,
      audience:  document.getElementById('audience').value,
    }
    axios.post(api('website/update/company'), data)
    .then(res => {
      if(fh.is_success(res.data)) {
        this.props.callback(this.props.website);
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

export default UpdateWebsiteCompanyForm;
