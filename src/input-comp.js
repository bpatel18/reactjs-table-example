import React from 'react';

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
            <tr><td>FirstName</td><td><input type="text" ref="fname"/></td></tr>
            <tr><td>LastName</td><td><input type="text" ref="lname"/></td></tr>
            <tr><td>EmailID</td><td><input type="text" ref="email"/></td></tr>
            <tr><td>Salary</td><td><input type="text" ref="salary"/></td></tr>
            <tr><td><button onClick={this.buttonClick}>Add Data</button></td></tr>
          </tbody>
        </table>
      </div>
    );
  }

  buttonClick() {
    let tmp = {
        'fname': this.refs.fname.value,
        'lname': this.refs.lname.value,
        'email': this.refs.email.value,
        'salary': this.refs.salary.value
    };
    this.props.buttonClick(tmp);
  }

}

export default InputComp;
