import React from 'react';
import PropTypes from 'prop-types';


function Info(props) {
let aboutStyle = {
  fontSize: "50px"
}
  return (



  <div style={aboutStyle}>
    <h3> name: {props.name}</h3>
      <h5> college: {props.college}</h5>
      <h5>age: {props.age}</h5>
      <h5>quote: {props.quote}</h5>
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
