import React,{ Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import { Editors } from 'react-data-grid-addons';
import Pageguid from './Pageguide';




const {DropDownEditor}=Editors;
const issueType=[
    { id:"bug" ,value:"Bug"},
    { id:"epic" ,value:"Epic"},
    { id:"story",value:"Story"},
    { id:"story1",value:"Story1"}
];

const IssueTypeEditor=<DropDownEditor options={issueType}/>

const columns=[
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
    { key: "complete", name: "Complete" },
    { key: "issueType", name: "Task Type", editor: IssueTypeEditor }
];

const rows=[

    { id: 0, title: "Task 1", issueType: "Bug", complete: 20 },
    { id: 1, title: "Task 2", issueType: "Story", complete: 40 },
    { id: 2, title: "Task 3", issueType: "Epic", complete: 60 },
    { id: 3, title: "Task 4", issueType: "Epic", complete: 80},
    { id: 4, title: "Task 5", issueType: "Story", complete: 100}
];


class Dropdown extends Component{

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

    render (){

        return(
            <div>
    <ReactDataGrid
          columns={columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={rows.length}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
        />
        <Pageguid />
    </div>
        )
    }


}
export default Dropdown ;