import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import AddCompanyForm from './AddCompanyForm'

class AddCompany extends Component {
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
                  <h2 className="card-title">Add your company</h2>
                  <p className="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <AddCompanyForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(AddCompany);
