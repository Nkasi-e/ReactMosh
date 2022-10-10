import React from 'react';
import Joi from 'joi-browser';
import { Form } from './common/Form';

class LoginForm extends Form {
  // setting a state
  state = {
    data: {
      username: '',
      password: '',
    },
    errors: {},
  };

  // Defining your schema
  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = () => {
    console.log('submitted');
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
