import React from 'react';

import InputComp from './input-comp';
import Table from './table';

class MainComp extends React.Component {

  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
    //this.addToTable = this.addToTable.bind(this);
    this.state={data:[]};
  }

  render() {
    const data = this.state.data;
    return (<div><InputComp  buttonClick={this.buttonClick}/><Table data={data}/></div>);
  }

  buttonClick(value) {
    //this.addToTable(value);
    const data = this.state.data;
    data.push(value);
    this.setState({data});
  }

  // addToTable(value) {
  //   this.refs.datatable.addToTable(value);
  // }

}

export default MainComp;
