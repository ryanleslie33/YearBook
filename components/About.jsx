import React from 'react';
import Info from '/Users/guest/desktop/yearbook/components/Info.jsx'
import {yearBookInfo} from '/Users/guest/desktop/yearbook/src/info.js';


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
