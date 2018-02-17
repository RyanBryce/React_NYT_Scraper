import React from 'react';

const Pannel = (props) => {
  return (
    <div className={`panel panel-default ${props.col}`} >
      <div className="panel-heading">
        <h3 className="panel-title text-center">{props.title}</h3>
      </div>
      <div className="panel-body">
       {props.children}
  </div>
</div >
  );
};

export default Pannel;