import React from 'react';
import Style from './style/table.css';

class Table extends React.Component {

  constructor() {
    super();
    this.data = [];
    this.addToTable = this.addToTable.bind(this);
  }

  render() {
    let tableItems = this.data.map((val, index) => {
      return (<tr className={Style.tr} key={index}><td className={Style.td}>{val.fname}</td><td className={Style.td}>{val.lname}</td>
        <td className={Style.td}>{val.email}</td><td className={Style.td}>{val.salary}</td></tr>);
    });
    return (
      <table className={Style.table}>
        <thead>
          <tr>
            <th className={Style.th}>First Name</th>
            <th className={Style.th}>Last Name</th>
            <th className={Style.th}>Email Id</th>
            <th className={Style.th}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {tableItems}
        </tbody>
      </table>
    );
  }

  addToTable(value) {
    this.data.push(value);
    this.setState(this.data);
  }

}

export default Table;
