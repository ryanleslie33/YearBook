
import PropTypes from 'prop-types';
import   React  from 'react';



class AddForm extends React.Component{
   _name :string;
   _college:string;
   _age:string;
   _quote:string;

  constructor(props){
    super(props);
    this.state={
    };

    this.handleNewPerson = this.handleNewPerson.bind(this);
  }

  handleNewPerson(event) {
    event.preventDefault();
    this.props.onNewPersonCreation({name:this._name.value, college:this._college.value, age: this._age.value, quote: this._quote.value });
    this._name.value = '';
    this._college.value = '';
    this._age.value = '';
    this._quote.value = '';
  }


  render(){
    return (
      <div>
      <form onSubmit={this.handleNewPerson} >
      <input
      placeholder='name'
      ref={(input) => {this._name = input}}
      />
      <input
      placeholder='college'
      ref={(input) => {this._college = input}}
      />
      <input
      placeholder='age'
      ref={(input) => {this._age = input}}
      />
      <input
      placeholder='quote'
      ref={(input) => {this._quote = input}}
      />
      <button type='submit'>submit</button>
      </form>

      </div>
    )
  }

}
AddForm.propTypes = {
  onNewPersonCreation: PropTypes.func
};



export default AddForm;
