import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class InboxList extends Component {
  render() {
    let auth = this.props.auth;
    let user = auth.user;
    let website = auth.website;
    let inbox = auth.inbox;
    let inboxItems = inbox.map((el, key)=> {
      return(
        <li key={key}>
          {el.name}
        </li>
      )
    })
    return (
      <div className="inbox-sidebar">
        <ul>
          {inboxItems}
        </ul>
      </div>
    );
  }
}

export default withRouter(InboxList);
