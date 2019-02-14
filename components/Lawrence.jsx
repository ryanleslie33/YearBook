import React from 'react';
import lawrence from '/Users/guest/desktop/yearbook/src/assets/images/lawrence.jpg';
import { Link } from 'react-router-dom';

function Lawrence(){
  let picLayout = {
    display: "grid",
  };
  return (
    <div style = {picLayout}>

    <img src={lawrence}/>
      <Link to="/lawrence">Lawrence</Link> 

    </div>
  );
}

export default Lawrence;
