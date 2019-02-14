import React from 'react';
import stapler from '/Users/guest/desktop/yearbook/src/assets/images/stapler.jpg';
import { Link } from 'react-router-dom';


function Stapler(){
  let picLayout = {
    display: "grid",
  };
  return (
    <div style = {picLayout}>


    <img src={stapler}/>
   <Link to="/peter">Peter</Link> 

    </div>
  );
}

export default Stapler;
