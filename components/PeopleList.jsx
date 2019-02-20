import React from 'react';
import Info from './Info';
import PropTypes from 'prop-types';
class PeopleList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
}
render(){
  return (
    <div>
    {this.props.peopleList.map((person) =>
      <Info name={person.name}
        college={person.college}
        age={person.age}
        quote={person.quote}
    />
  )}</div>
)
}
}
PeopleList.propTypes = {
  peopleList: PropTypes.array
}
export default PeopleList;
