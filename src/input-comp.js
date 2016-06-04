import React from 'react';
import isValid from './validation.js';

class InputComp extends React.Component {

  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr><td>FirstName</td><td><input type="text" ref="fname"/><span ref="spnFname"/></td></tr>
            <tr><td>LastName</td><td><input type="text" ref="lname"/><span ref="spnLname"/></td></tr>
            <tr><td>EmailID</td><td><input type="text" ref="email"/><span ref="spnEmail"/></td></tr>
            <tr><td>Salary</td><td><input type="text" ref="salary"/><span ref="spnSalary"/></td></tr>
            <tr><td><button onClick={this.buttonClick}>Add Data</button></td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  buttonClick() {
    console.log(isValid);
    let isVal = isValid(this.refs);
    if(!isVal){
      return;
    }
    let tmp = {
        'fname': this.refs.fname.value,
        'lname': this.refs.lname.value,
        'email': this.refs.email.value,
        'salary': this.refs.salary.value
    };
    this.props.buttonClick(tmp);

    this.refs.fname.value="";
    this.refs.lname.value="";
    this.refs.email.value="";
    this.refs.salary.value="";
    this.refs.fname.focus();
  }


}

export default InputComp;
