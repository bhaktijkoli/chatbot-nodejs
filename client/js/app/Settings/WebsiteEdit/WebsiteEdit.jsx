import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom';

import EmptyLoading from './../../Layout/EmptyLoading'

import WebsiteEditForm from './WebsiteEditForm'

class WebsiteEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      website: null,
    }
  }
  componentDidMount() {
    this.props.dispatch({type: "AUTH_MENU", payload: "settings"})
    this.getWebsiteDetails();
  }
  render() {
    let website = this.state.website;
    if(!website) return <EmptyLoading/>
    return (
      <div className="container">
        <div className="space50"/>
        <div className="card raised animated fadeInDown">
          <div className="card-header">
            <h2 className="card-title">Website Settings</h2>
            <p className="card-subtitle">Edit {website.name}</p>
            <div className="space20"/>
            <div className="space20"/>
            <WebsiteEditForm user={this.props.auth.user} website={this.state.website}/>
          </div>
        </div>
      </div>
    );
  }
  getWebsiteDetails() {
    axios.get(api('/website/get/'+this.props.match.params.id))
    .then(res => {
      this.setState({website: res.data});
    })
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(WebsiteEdit));
