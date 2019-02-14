import React from 'react';
import peter from '/Users/guest/desktop/yearbook/src/assets/images/peter.jpg';
import { Link } from 'react-router-dom';
import {yearBookInfo} from '/Users/guest/desktop/yearbook/src/info.js';
import Info from '/Users/guest/desktop/yearbook/components/Info.jsx';

function Peter(){
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
    <img style={imgSize} src={peter}/>
  <Link to="/">Home</Link>
     <Info
       name={yearBookInfo[0].name}
       college={yearBookInfo[0].college}
       age={yearBookInfo[0].age}
       quote={yearBookInfo[0].quote}
       />
    </div>
  );
}

export default Peter;
