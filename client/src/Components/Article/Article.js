import React from 'react';
import Button from '../Button';

const Atricle = (props) => {
  return (
    <div className="row">
      <div className="col-xs-4">
          <h5>
            {props.children}
          </h5>
      </div>
      <div className="col-xs-4 text-center">
        Date: {props.date}
      </div>      
      <div className="col-xs-4 col-xs-push-3">
          <Button className="btn btn-success" handleClick={props.handleClick}> 
            Save
          </Button>
      </div>
      <hr />
    </div>
  );
};

export default Atricle;