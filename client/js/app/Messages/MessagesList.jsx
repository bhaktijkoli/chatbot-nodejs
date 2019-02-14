import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class MessagesList extends Component {
  render() {
    let auth = this.props.auth;
    let user = auth.user;
    let website = auth.website;
    let chats = auth.chats;
    let chatItems = chats.map((el, key)=> {
      return(
        <li key={key}>
          <NavLink to={"/messages/"+el.id} className={"chat-item " + el.color} activeClassName="active">
            <div className="chat-icon">
              <span className="typcn typcn-user"></span>
            </div>
            <div className="chat-text">
              <p className="title">{el.name}</p>
              <p className="subtitle">{el.lastMessage.message}</p>
            </div>
            <div className="chat-time">
              <p>{moment(el.lastMessage.createdAt).fromNow()}</p>
            </div>
          </NavLink>
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
