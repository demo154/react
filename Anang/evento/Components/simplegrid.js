import React from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import "../Components/simplegrid.css";
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Inject } from '@syncfusion/ej2-react-grids';

const defaultColumnProperties = {
    resizable: true,
    width: 120
  };
const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: true }
].map(c => ({ ...c, ...defaultColumnProperties }));


const rows = [
  { id: 0, title: "Task 1", complete: 20 },
  { id: 1, title: "Task 2", complete: 40 },
  { id: 3, title: "Task 3", complete: 60 },
  { id: 4, title: "Task 4", complete: 50 },
  { id: 5, title: "Task 5", complete: 60 },
  { id: 6, title: "Task 6", complete: 40 },
  { id: 7, title: "Task 7", complete: 60 },
  { id: 8, title: "Task 8", complete: 60 },
  { id: 9, title: "Task 9", complete: 70 },
  { id: 10, title: "Task 10", complete: 40 },
  { id: 11, title: "Task 11", complete: 80 },

];

class SimpleGrid extends React.Component {
  state = { rows };

  // onGridRowsUpdated = () => {
  //   this.setState(state => {
  //     const rows = state.rows.slice();
  //     console.log(columns)
  //     for (let i = 0; i <= columns.length; i++) {
  //       console.log(columns[i])
  //       var s=i.toString();
  //       for(let j=0; j<=s; j++){
  //           console.log(j)
      
  //       }
  //     }
  //   // return {columns};
  //   });
  // };
//   onColumnWidth = ({fromColumn,toColumn, updatedSize}) => {
//     this.setState(state => {
//         const columns = state.columns.slice();
//         let l = key.length;
//         for (let i = 0; i <= columns.length; i++) {
//             console.log(columns[i])
//         }
//         return {columns};
//     });
//   };
  render() {
    return (
    //   <GridComponent  allowPaging={true}  allowTextWrap={true} height='300'>

      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={12}
        columnCount={4}
        onGridRowsUpdated={this.onGridRowsUpdated}
        onColumnWidth={this.onColumnWidth}
        enableCellSelect={true}
        allowTextWrap={true}
        minHeight={500}
        onColumnResize={(idx, width) =>
          console.log(`Column ${idx} has been resized to ${width}`)
        }
      />
    //  </GridComponent>
    );
  }
}
export default SimpleGrid

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Example />, rootElement);
