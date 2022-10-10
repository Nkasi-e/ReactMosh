import React, { Component } from 'react';
import Joi from 'joi-browser';
import InputForm from './InputForm';

export class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  // Validate
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // ValidateProperty
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  // Submit handler fn
  handleSubmit = (e) => {
    e.preventDefault();

    // setting validation
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  //handChange fn
  handleChange = ({ target: input }) => {
    // validating onChange
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    // controlled
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  // button
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  // Input
  renderInput(name, label, type = 'text') {
    const { errors, data } = this.state;
    return (
      <InputForm
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

// export default Form;
