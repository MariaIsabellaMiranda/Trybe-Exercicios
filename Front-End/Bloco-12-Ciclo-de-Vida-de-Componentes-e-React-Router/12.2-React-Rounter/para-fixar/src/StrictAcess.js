import React from "react";
import { Redirect } from 'react-router-dom';

class StrictAcess extends React.Component {
  render() {
    const { username, password } = this.props.user;
    if (!(username==='joao' && password === '1234')){
      alert('Access denied');
      return <Redirect to="/" />
    }
    return (
      <p>Welcome joao!</p>
    );
  }
}

export default StrictAcess;
