import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Stapler from '/Users/guest/desktop/yearbook/components/Stapler.jsx';
import Lumberg from '/Users/guest/desktop/yearbook/components/Lumberg.jsx';
import Lawrence from '/Users/guest/desktop/yearbook/components/Lawrence.jsx';
import Peter from '/Users/guest/desktop/yearbook/components/Peter.jsx';
import About from '/Users/guest/desktop/yearbook/components/About.jsx';



function App(){
  return (
    <div>
      <Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/stapler' component={Stapler} />
  <Route exact path='/lumberg' component={Lumberg} />
  <Route exact path='/lawrence' component={Lawrence} />
  <Route exact path='/peter' component={Peter} />
      </Switch>
    </div>
  );
}

export default App;
