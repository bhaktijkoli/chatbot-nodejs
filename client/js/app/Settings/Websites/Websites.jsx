import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom';

class Account extends Component {
  componentDidMount() {
    document.title = "Websites"
    this.props.dispatch({type: "AUTH_MENU", payload: "settings"})
  }
  render() {
    let websitesList = this.props.auth.websites.map((el, key)=>{
      return (
        <tr key={key}>
          <td>{el.name}</td>
          <td>{el.domain}</td>
          <td className={el.active?'success':'danger'}>{this.getStatusText(el.active)}</td>
          <td><Link to="/" className="btn-text">Settings</Link></td>
        </tr>
      )
    })
    return (
      <div className="container">
        <div className="space50"/>
        <div className="card raised animated fadeInDown">
          <div className="card-header">
            <h2 className="card-title">Website Settings</h2>
            <p className="card-subtitle">Manage your websites.</p>
            <div className="space20"/>
            <table id="websites-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Domain</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {websitesList}
              </tbody>
            </table>
            <div className="space20"/>
            <Link to="/websites/add" className="btn-text" style={{marginLeft:10}}>Add website</Link>
          </div>
        </div>
      </div>

    );
  }
  getStatusText(status) {
    if(status == 0) {
      return "inactive"
    } else if(status == 1) {
      return "active"
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(Account));
