import React from 'react';

import InputComp from './input-comp';
import Table from './table';

class MainComp extends React.Component {

  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
    this.addToTable = this.addToTable.bind(this);
  }

  render() {
    return (<div><InputComp buttonClick={this.buttonClick}/><Table ref="datatable"/></div>);
  }

  buttonClick(value) {
    this.addToTable(value);
  }

  addToTable(value) {
    this.refs.datatable.addToTable(value);
  }

}

export default MainComp;
