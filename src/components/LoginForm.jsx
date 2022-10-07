import React, { Component } from 'react';
import InputForm from './common/InputForm';

class LoginForm extends Component {
  // setting a state
  state = {
    account: {
      username: '',
      password: '',
    },
  };

  // Submit handler fn
  handleSubmit = (e) => {
    e.preventDefault();
  };

  //handChange fn
  handleChange = (e) => {
    e.preventDefault();
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <InputForm
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <InputForm
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
