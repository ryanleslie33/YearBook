import React from 'react';
import peter from '/Users/guest/desktop/yearbook/src/assets/images/peter.jpg';
import { Link } from 'react-router-dom';


function Peter(){
  let picLayout = {
    display: "grid",
  };
  return (
    <div style = {picLayout}>


    <img src={peter}/>
   <Link to="/peter">Peter</Link> 

    </div>
  );
}

export default Peter;
