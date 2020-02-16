import { AgGridReact } from 'ag-grid-react';
import React,{Component} from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Name", field: "name" ,sortable:true,filter:true ,checkboxSelection: true},
        { headerName: "City", field: "address.city",sortable:true,filter:true,checkboxSelection: true },
        { headerName: "Phone Number", field: "phone" ,sortable:true,filter:true,checkboxSelection: true},
        { headerName: "Company Name", field: "company.name" ,sortable:true,filter:true,checkboxSelection: true},
        { headerName: "Street", field: "address.street" ,sortable:true,filter:true,checkboxSelection: true},
        { headerName: "Zipcode", field: "address.zipcode" ,sortable:true,filter:true,checkboxSelection: true},
        { headerName: "Website", field: "website" ,sortable:true,filter:true,checkboxSelection: true}]
    //   rowData: [
    //     { make: "Toyota", model: "Celica", price: 35000 },
    //     { make: "Ford", model: "Mondeo", price: 32000 },
    //     { make: "Porsche", model: "Boxter", price: 72000 }]
    }
  }

  componentDidMount() {
      //fetch('https://api.myjson.com/bins/15psn9')
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(rowData => this.setState({rowData}))
     }

     onButtonClick = e => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map( node => node.data )
        const selectedDataStringPresentation = selectedData.map( node => node.name + ' ' + node.address.city+ ' '+node.phone+ ' '+node.company.name+ ' '+node.address.street+ ' '+node.address.zipcode+ ' '+node.website).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
        }

  render() {
    return (
      <div className="ag-theme-balham" style={ {height: '200px', width: '2000px'} }>
      
        <AgGridReact
            onGridReady={ params => this.gridApi = params.api }
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}    rowSelection="multiple">
        </AgGridReact>
        <button onClick={this.onButtonClick}>Get selected rows</button>
      </div>
    );
  }
}

export default Grid