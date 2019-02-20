import React from 'react';
import stapler from '../src/assets/images/stapler.jpg';
import { Link } from 'react-router-dom';
import {yearBookInfo} from '../src/info.js';
import Info from '../components/Info.jsx';


function Stapler(){
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


    <img style={imgSize}src={stapler}/>
     <Link to="/">Home</Link>
     <Info
       name={yearBookInfo[2].name}
       college={yearBookInfo[2].college}
       age={yearBookInfo[2].age}
       quote={yearBookInfo[2].quote}
       />
    </div>
  );
}

export default Stapler;
