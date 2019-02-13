import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MessagesList extends Component {
  render() {
    let auth = this.props.auth;
    let user = auth.user;
    let website = auth.website;
    let chats = auth.chats;
    let chatItems = chats.map((el, key)=> {
      return(
        <li key={key}>
          {el.name}
        </li>
      )
    })
    return (
      <div className="messages-sidebar">
        <ul>
          {chatItems}
        </ul>
      </div>
    );
  }
}

export default withRouter(MessagesList);
