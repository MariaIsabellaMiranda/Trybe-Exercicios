import React, { Component } from 'react';

class Home extends Component {
  render() {
    const { greetingsMessage } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, { id } </p>
      </div>
    );
  }
}

export default Home;
