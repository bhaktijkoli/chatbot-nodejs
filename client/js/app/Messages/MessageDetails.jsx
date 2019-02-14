import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import EmptyLoading from './../Layout/EmptyLoading';

class MessageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: null,
      messages: [],
      visitor: null,
    }
    this.getChatDetails = this.getChatDetails.bind(this);
  }
  componentDidMount() {
    this.props.history.listen((location, action) => {
      this.setState({chat: null, messages: [], visitor: null});
    })
  }
  componentDidUpdate(prevProps) {
    if(this.state.chat == null) {
      this.getChatDetails();
    }
  }
  render() {
    let chat = this.state.chat;
    let messages = this.state.messages;
    let visitor = this.state.visitor;
    if(chat == null) return <EmptyLoading />
    return (
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="chat-window">

          </div>
        </div>
        <div className="col-sm-4">
          <div className="chat-visitor-info">
            <div className={"chat-item "+chat.color}>
              <div className="chat-icon">
                <span className="typcn typcn-user"></span>
              </div>
              <div className="chat-text">
                <p className="title">{chat.name}</p>
                <p className="subtitle"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  getChatDetails() {
    axios.get(api('/chat/get/details/')+this.props.match.params.id).then(res=>{
      this.setState({chat: res.data, messages: res.data.messages, visitor: res.data.visitor});
    })
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default withRouter(connect(mapStateToProps)(MessageDetails));
