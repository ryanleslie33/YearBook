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
import PeopleList from './PeopleList';
import PropTypes from 'prop-types';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      masterPeopleList: []
    };
    this.handleAddingNewPersonToList = this.handleAddingNewPersonToList.bind(this);
  }
  handleAddingNewPersonToList(newPerson) {
    var newMasterPeopleList = this.state.masterPeopleList.slice();
    newMasterPeopleList.push(newPerson);
    this.setState({masterPeopleList: newMasterPeopleList});
  }
  render(){


    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/thing' render={()=><PeopleList peopleList={this.state.masterPeopleList} />} />
      <Route path='/addform' render={()=><AddForm onNewPersonCreation={this.handleAddingNewPersonToList} />} />
      <Route exact path='/' component={Home} />
      <Route exact path='/stapler' component={Stapler} />
      <Route exact path='/lumberg' component={Lumberg} />
      <Route exact path='/lawrence' component={Lawrence} />
      <Route exact path='/peter' component={Peter} />

      </Switch>
      </div>
    );
  }
}

export default App;
