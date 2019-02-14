import React from 'react';
import Stapler from '/Users/guest/desktop/yearbook/components/Stapler.jsx';
import Lumberg from '/Users/guest/desktop/yearbook/components/Lumberg.jsx';
import Lawrence from '/Users/guest/desktop/yearbook/components/Lawrence.jsx';
import Peter from '/Users/guest/desktop/yearbook/components/Peter.jsx';
import About from '/Users/guest/desktop/yearbook/components/About.jsx';

function Home(){
  let picLayout = {
    display: "grid",
  };
  return (
    <div style = {picLayout}>
    <h2>Welcome to the initech 2019 yearbook!!</h2>
    <hr/>
    <Stapler/>
    <Lumberg/>
    <Lawrence/>
    <Peter/>
    <About/>

    </div>
  );
}

export default Home;
