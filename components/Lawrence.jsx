import React from 'react';
import lawrence from '/Users/guest/desktop/yearbook/src/assets/images/lawrence.jpg';
import { Link } from 'react-router-dom';
import {yearBookInfo} from '/Users/guest/desktop/yearbook/src/info.js';
import Info from '/Users/guest/desktop/yearbook/components/Info.jsx';

function Lawrence(){
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

    <img style = {imgSize}src={lawrence}/>
      <Link to="/">Home</Link>
        <Info
          name={yearBookInfo[3].name}
          college={yearBookInfo[3].college}
          age={yearBookInfo[3].age}
          quote={yearBookInfo[3].quote}
          />
    </div>
  );
}

export default Lawrence;
