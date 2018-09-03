import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirectHome: false
    };
  }

  _login = () => {
    this.setState({
        shouldRedirectHome: true
    });
  };
  

  render() {
    if (this.state.shouldRedirectHome) {
        return <Redirect to="/home" />
    }

    return (
      <div>
          <h1>Login</h1>
          <button onClick={this._login}>Login</button>
      </div>
    );
  }
}
