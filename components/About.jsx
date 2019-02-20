import React from 'react';
import Info from '../components/Info.jsx';
import {yearBookInfo} from '../src/info.js';


function About(){
  let infoStyle = {
    float:"right"
  }
  return (
    <div style = {infoStyle} >

      {yearBookInfo.map((info, index) =>
        <Info

          name={info.name}
          college={info.college}
          age={info.age}
          quote={info.quote}
          key={index}
          />
      )}
    </div>
  );
}

export default About;
