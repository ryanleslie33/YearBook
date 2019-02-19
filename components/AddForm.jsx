// 
// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
//
//
//
// class AddForm extends React.Component(){
//   constructor(props){
//     super(props);{};
//     this.state={
//       name:[]
//     };
//
//    this.addForm = this.addForm.bind(this)
//   }
//
//   addForm(e){
// if(this._inputElement.value !== ""){
//   let newInput = {
//     text:this._inputElement.value,
//     key: Date.now()
//   }
//   this.setState((prevState) => {
//     return{
//       name: prevState.name.concat(this.addForm)
//     }
//   })
// }
// this._inputElement.value = "";
// console.log(this.state.name)
// e.prevent.Default();
// }
// render(){
//   return (
//     <div>
//       <form>
//         <input>
//           placeholder='name'
//           ref={(input) => this._inputElement= input}
//           </input>
//          </form>
//
//     </div>
//   )
// }
//
// }
//
//
//
// export default AddForm;
