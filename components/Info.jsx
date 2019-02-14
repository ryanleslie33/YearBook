import React from 'react';
import PropTypes from 'prop-types';


function Info(props) {
  return (



  <div>
    <h3>{props.name}</h3>
      <h5>{props.college}</h5>
      <h5>{props.age}</h5>
      <h5>{props.quote}</h5>
  </div>


  );
}

Info.propTypes = {

  name: PropTypes.string,
  college: PropTypes.string,
  age: PropTypes.string,
 quote: PropTypes.string
};

export default Info;
