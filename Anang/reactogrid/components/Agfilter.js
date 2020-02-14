import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Agfilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Make", field: "make", sortable: true, filter: true
      }, {
        headerName: "Model", field: "model", sortable: true, filter: true
      }, {
        headerName: "Price", field: "price", sortable: true, filter: true
      }],
      // rowData: [{
      //   make: "Toyota", model: "Celica", price: 35000
      // }, {
      //   make: "Ford", model: "Mondeo", price: 32000
      // }, {
      //   make: "Porsche", model: "Boxter", price: 72000
      // }]
      visible:false,
     
    
    }
    this.toggleMenu= this.toggleMenu.bind(this);
  }
  onButtonClick = e => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model+ ' ' +node.price).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
  componentDidMount() {
      fetch('https://api.myjson.com/bins/15psn9')
     .then(result => result.json())
     .then(rowData => this.setState({rowData}))
     }
     
     toggleMenu() {
      this.setState({visible: !this.state.visible})
  }

     
  render() {
    return (
      <div>
      <button onClick={this.toggleMenu} style={{backgroundColor:'pink',padding:'10px', color:'blue'}}>Show table </button>

      {this.state.visible&&<div
        className="ag-theme-balham"
        style={{
        height: '500px',
        width: '600px' }}
        
        //  <h2>{this.state.tablename}</h2>
        
      >
      
       
        <AgGridReact
        onGridReady={ params => this.gridApi = params.api }
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection="multiple"
          pagination={true}
           >
        </AgGridReact>
      
    </div>}
    </div>
    );
  }
}

export default Agfilter;