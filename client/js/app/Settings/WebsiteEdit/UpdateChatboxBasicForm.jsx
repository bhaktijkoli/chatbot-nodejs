import React, { Component } from 'react';
import { If } from 'react-if'
import { withRouter, Link } from 'react-router-dom';

class UpdateChatboxBasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
    }
    this.checkValues = this.checkValues.bind(this)
    this.onUpdateClick = this.onUpdateClick.bind(this)
  }
  render() {
    let website = this.props.website;
    let chatbox = this.props.website.chatbox;
    return (
      <form id="websiteUpdateChatboxBasicForm">
        <h4>Chatbox Basic Settings</h4>
        <div className="input-group inline">
          <div className="col-sm-2">
            <label htmlFor="firstname">Title</label>
          </div>
          <div className="col-sm-6">
            <input type="text" id="title" name="text" placeholder="Enter your website name" onChange={this.checkValues} defaultValue={chatbox.title}/>
            <p className="help-block"></p>
          </div>
        </div>
        <div className="input-group inline">
          <div className="col-sm-2">
            <label htmlFor="firstname">Welcome Message</label>
          </div>
          <div className="col-sm-6">
            <input type="text" id="welcome_message" name="text" placeholder="Enter your domain name" onChange={this.checkValues} defaultValue={chatbox.welcome_message}/>
            <p className="help-block"></p>
          </div>
        </div>
        <div className="input-group inline">
          <div className="col-sm-2">
            <label htmlFor="firstname">Primary Color</label>
          </div>
          <div className="col-sm-6">
            <input type="text" id="color" name="text" placeholder="Enter your color" onChange={this.checkValues} defaultValue={chatbox.color}/>
            <p className="help-block"></p>
          </div>
        </div>
        <div className="input-group inline">
          <div className="col-sm-6 offset-2">
            <If condition={this.state.changed}>
              <button type="button" className="btn primary" onClick={this.onUpdateClick}>Save</button>
            </If>
          </div>
        </div>
      </form>
    );
  }
  checkValues() {
    let website = this.props.website;
    let chatbox = this.props.website.chatbox;
    if(document.getElementById('title').value != chatbox.title
    || document.getElementById('welcome_message').value != chatbox.welcome_message
    || document.getElementById('color').value != chatbox.color)    {
      this.setState({changed: true});
    } else {
      this.setState({changed: false});
    }
  }
  onUpdateClick() {
    fh.hide_button();
    fh.remove_all_errros('websiteUpdateChatboxBasicForm');
    let data = {
      chatbox: this.props.website.chatbox.id,
      title:  document.getElementById('title').value,
      welcome_message:  document.getElementById('welcome_message').value,
      color:  document.getElementById('color').value,
    }
    axios.post(api('chatbox/update/basic'), data)
    .then(res => {
      if(fh.is_success(res.data)) {
        Toast.show({
          message: 'Chatbox settings updated.',
          ...window.Toast.success
        });
        this.props.update();
      } else {
        fh.set_multierrors(res.data);
      }
    })
    .catch(err=> {fh.show_errorpage(err)})
    .finally(() => {
      fh.show_button();
    })
  }
}

export default UpdateChatboxBasicForm;
