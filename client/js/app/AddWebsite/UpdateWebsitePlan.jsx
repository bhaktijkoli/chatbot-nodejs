import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateWebsitePlan extends Component {
  render() {
    return (
      <form id="formUpdateWebsitePlan" onSubmit={this.onSubmit.bind(this)}>
        <div className="row">
          <div className="col-sm-12">
            <div className="input-group">
              <label htmlFor="plan">Select Plan</label>
              <select id="plan" name="plan">
                <option disabled>Select Plan</option>
                <option value="0">Basic</option>
                <option value="1">Pro</option>
                <option value="2">Unlimited</option>
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
    fh.remove_all_errros('formUpdateWebsitePlan');
    let data = {
      website: this.props.website.id,
      plan:  document.getElementById('plan').value,
    }
    axios.post(api('website/update/plan'), data)
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

export default UpdateWebsitePlan;
