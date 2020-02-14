import React from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import "../Components/altcolor.css";

const columns = [
  { key: "id", name: "ID", editable: true },
  { key: "title", name: "Title", editable: true },
  { key: "complete", name: "Complete", editable: true }
];

const rows = [
  { id: 0, title: "Task 1", complete: 20 },
  { id: 1, title: "Task 2", complete: 40 },
  { id: 2, title: "Task 3", complete: 60 },
  { id: 3, title: "Task 4", complete: 80 },
  { id: 4, title: "Task 5", complete: 100 },
  { id: 5, title: "Task 6", complete: 120 },
  { id: 6, title: "Task 7", complete: 140 },
  { id: 7, title: "Task 8", complete: 160 },
  { id: 8, title: "Task 9", complete: 180 },
  { id: 9, title: "Task 10", complete: 200 },
  { id: 10, title: "Task 11", complete: 220 },
  { id: 11, title: "Task 12", complete: 240 }
];

class AltColor extends React.Component {
  state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
    //

  };
  
  render() {
    return (
        
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={12}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    );
  }
}
 export default AltColor
const rootElement = document.getElementById("root");
ReactDOM.render(<AltColor />, rootElement);
