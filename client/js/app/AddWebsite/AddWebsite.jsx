import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { If, Then, Else, When, Unless } from 'react-if'

import AddWebsiteForm from './AddWebsiteForm'
import UpdateWebsiteCompanyForm from './UpdateWebsiteCompanyForm'
import UpdateWebsitePlan from './UpdateWebsitePlan'

class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      website: {},
    }
  }
  componentDidMount() {
    document.title = "Add your company"
    this.props.dispatch({type: "AUTH_MENU", payload: "settings"})
  }
  render() {
    return (
      <main>
        <div className="container-fluid" style={{marginTop:100}}>
          <div className="row">
            <div className="col-sm-6 offset-3">
              <div className="card raised animated-fadeIn">
                <div className="card-header">
                  <h2 className="card-title">Add your Website</h2>
                  <p className="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <If condition={this.state.step == 0}>
                  <AddWebsiteForm callback={this.nextStep.bind(this)}/>
                </If>
                <If condition={this.state.step == 1}>
                  <UpdateWebsiteCompanyForm callback={this.nextStep.bind(this)} website={this.state.website}/>
                </If>
                <If condition={this.state.step == 2}>
                  <UpdateWebsitePlan callback={this.nextStep.bind(this)} website={this.state.website}/>
                </If>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  nextStep(website) {
    if(this.state.step == 2) {
      Swal.SingleDialog.fire({
        text: 'Your website was successfully added.',
        type: 'success',
        confirmButtonText: 'Ok'
      }).then(()=> {
        window.location.href="/"
      });
    }
    this.setState({
      step: this.state.step + 1,
      website: website,
    });
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(AddCompany);
