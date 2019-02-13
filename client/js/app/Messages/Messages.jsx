import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import MessagesList from './MessagesList'

class Home extends Component {
  componentDidMount() {
    document.title = "Home"
    this.props.dispatch({type: "AUTH_MENU", payload: "messages"})
  }
  componentDidUpdate(prevProps) {
    if (this.props.auth.website !== prevProps.auth.website) {
      axios.get(api('/chat/get/')+this.props.auth.website.id).then(res=>{
        this.props.dispatch({type: "AUTH_SET_CHATS", payload: res.data})
      })
    }
  }
  render() {
    return (
      <main>
        <div className="row">
          <div className="col-sm-3">
            <MessagesList auth={this.props.auth}/>
          </div>
          <div className="col-sm-9">
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

export default withRouter(connect(mapStateToProps)(Home));
