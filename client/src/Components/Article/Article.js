import React from 'react';

const Atricle = (props) => {
  return (
    <div className="row">
      <div className="col-xs-4">      
        <a href={props.href}>{props.snippet}</a>
      </div>
      <div className="col-xs-4 text-center">
        Date: {props.date}
      </div>      
      <div className="col-xs-4 col-xs-push-3">
        <button className="btn btn-success" onClick={ () => props.handleClick(props.id) }> 
          {props.buttonName}
          </button>
      </div>
      <hr />
    </div>
  );
};

export default Atricle;