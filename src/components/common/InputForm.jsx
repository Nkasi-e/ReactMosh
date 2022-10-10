import React from 'react';

const InputForm = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        // value={value}
        // onChange={onChange}
        id={name}
        // type={type}
        className="form-control"
      />
      {/*Displaying validation errors*/}
      {error && <small className="alert alert-danger">{error}</small>}
    </div>
  );
};

export default InputForm;
