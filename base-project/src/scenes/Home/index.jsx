import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        shouldRedirectLogin: false
    };
  }

  _logout = () => {
    this.setState({
        shouldRedirectLogin: true
    });
  };
  

  render() {
    if (this.state.shouldRedirectLogin) {
        return <Redirect to="/login" />
    }

    return (
      <div>
          <h1>Home</h1>
          <button onClick={this._logout}>Logout</button>
      </div>
    );
  }
}
