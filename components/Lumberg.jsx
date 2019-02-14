import React from 'react';
import lumberg from '/Users/guest/desktop/yearbook/src/assets/images/lumberg.jpg';
import { Link } from 'react-router-dom';

function Lumberg(){
  let picLayout = {
    display: "grid",
  };
  return (
    <div style = {picLayout}>

    <img src={lumberg}/>
     <Link to="/lumberg">Lumberg</Link> 
    </div>
  );
}

export default Lumberg;
