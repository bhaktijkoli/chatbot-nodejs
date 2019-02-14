import React, { Component } from 'react';

import UpdateBasicForm from './UpdateBasicForm'
import UpdateChatboxBasicForm from './UpdateChatboxBasicForm'
import Operators from './Operators'

class WebsiteEdit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let website = this.props.website;
    return (
      <div>
        <UpdateBasicForm website={this.props.website} />
        <UpdateChatboxBasicForm website={this.props.website} />
        <Operators website={this.props.website} />
      </div>
    );
  }
}

export default WebsiteEdit;
