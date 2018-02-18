import React from 'react';

const Input = (props) => {
  return (
    <input 
      className="col-xs-6 col-xs-offset-3" 
      name={props.name} 
      value={props.value} 
      placeholder={props.placeholder} 
      onChange={props.handleChange} />
  );
};

export default Input;