import React, { Component } from 'react';

import UpdateBasicForm from './UpdateBasicForm'
import UpdateChatboxBasicForm from './UpdateChatboxBasicForm'
import Operators from './Operators'

class WebsiteEdit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <UpdateBasicForm website={this.props.website} update={this.props.update}/>
        <UpdateChatboxBasicForm website={this.props.website} update={this.props.update}/>
        <Operators website={this.props.website} update={this.props.update}/>
      </div>
    );
  }
}

export default WebsiteEdit;
