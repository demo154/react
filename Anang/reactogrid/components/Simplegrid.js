import React from "react";
import ReactDataGrid from "react-data-grid";
import {ProgressBar} from "react-bootstrap";


 const progress=({value})=>{
  return <ProgressBar now={value} label={`${value}%`} />;
}
const defaultColumnProperties = {
  resizable: true,
  width: 200
};

const columns = [

    {key:"id", name:"ID", editable:true},
    {key:"title", name:"Title", editable:true},
    {key:"complete", name:"Complete",editable:true ,formatter:progress},
    {key:"date", name:"Completion_Date"}
   

].map(c => ({ ...c, ...defaultColumnProperties }));
const rows = [

   
        { id: 0, title: "Task 1", complete: 20, date:"12/20/2019" },
        { id: 1, title: "Task 2", complete: 40, date:"12/25/2019"},
        { id: 2, title: "Task 3", complete: 60, date:"12/30/2019" },
        { id: 3, title: "Task4",  complete: 80, date:"1/2/2020"},
        { id: 4, title: "Task5",  complete: 100,date:"1/4/2020"}
]

class Simplegrid extends React.Component{

    state = { rows };

                          onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
                            this.setState(state => {
                              const rows = state.rows.slice();
                              for (let i = fromRow; i <= toRow; i++) {
                                rows[i] = { ...rows[i], ...updated };
                              }
                              return { rows };
                            });
                          };
  render() {
    return (
      <div>
     
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={rows.length}
        onGridRowsUpdated={this.onGridRowsUpdated}
         enableCellSelect={true}
        
      />
     </div>
    );
  }


}

export default Simplegrid;