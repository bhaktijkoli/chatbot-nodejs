import React, { Component } from 'react';

class EmptyLoading extends Component {
  render() {
    if(this.props.condition) {
      return this.props.children
    }
    return (
      <div>
      </div>
    );
  }
}

export default EmptyLoading;
