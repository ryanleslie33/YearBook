import React from 'react';

class NewFormControll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
  console.log('Hey, you clicked me! I do not have code to change my state quite yet, but I will in a moment!');
}

  render(){
    return (
      <div>
        <p>This is the NewFormControll component!</p>
         <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewFormControll;
