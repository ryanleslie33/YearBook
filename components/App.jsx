import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Stapler from './Stapler.jsx';
import Lumberg from './Lumberg.jsx';
import Lawrence from './Lawrence.jsx';
import Peter from './Peter.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import AddForm from './AddForm.jsx';
import NewFormControll from './NewFormControll';



function App(){
  return (
    <div>
    <Header/>
      <Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/stapler' component={Stapler} />
  <Route exact path='/lumberg' component={Lumberg} />
  <Route exact path='/lawrence' component={Lawrence} />
  <Route exact path='/peter' component={Peter} />
    <Route exact path='/addForm' component={AddForm} />
      </Switch>
    </div>
  );
}

export default App;
