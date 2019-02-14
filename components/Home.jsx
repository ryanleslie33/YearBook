import React from 'react';
import lawrence from '/Users/guest/desktop/yearbook/src/assets/images/lawrence.jpg';
import lumberg from '/Users/guest/desktop/yearbook/src/assets/images/lumberg.jpg';
import peter from '/Users/guest/desktop/yearbook/src/assets/images/peter.jpg';
import stapler from '/Users/guest/desktop/yearbook/src/assets/images/stapler.jpg';
import { Link } from 'react-router-dom';

function Home(){
  let picLayout = {
    display: "grid",
    backgroundColor:"grey",
  };
  let title = {
    fontSize:"45px"
  }
  return (
    <div style = {picLayout}>
    <h2 style={title}>Welcome to the initech 2019 yearbook!!</h2>
    <hr/>
      <img src={lawrence}/>
        <Link to="/lawrence">Lawrence</Link>
          <br/>
          <br/>
          <img src={lumberg}/>
           <Link to="/lumberg">Lumberg</Link>
             <br/>
             <br/>
             <img src={peter}/>
            <Link to="/peter">Peter</Link>
              <br/>
              <br/>
              <img src={stapler}/>
             <Link to="/stapler">Stapler</Link>

    </div>
  );
}

export default Home;
