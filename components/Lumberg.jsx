import React from 'react';
import lumberg from '../src/assets/images/lumberg.jpg';
import { Link } from 'react-router-dom';
import {yearBookInfo} from '../src/info.js';
import Info from '../components/Info.jsx';

function Lumberg(){
  let picLayout = {
    display: "grid",
    backgroundColor:"grey",
  };
  let imgSize = {
    height: "500px",
    width: " 50%",
  }
  return (
    <div style = {picLayout}>

    <img style = {imgSize}src={lumberg}/>
     <Link to="/">Home</Link>
       <Info
         name={yearBookInfo[1].name}
         college={yearBookInfo[1].college}
         age={yearBookInfo[1].age}
         quote={yearBookInfo[1].quote}
         />
    </div>
  );
}

export default Lumberg;
