import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import {Toolbar, Data, Filters, ToolsPanel, Draggable} from "react-data-grid-addons";
import "./GroupingDrg.css";
import moment from "moment";

const defaultColumnProperties = {
  filterable: true,
  draggable: true,
  sortable : true,
  width: 160
};

// ----- ReOrdering -----
const {
  DraggableHeader: { DraggableContainer }
  
} = require("react-data-grid-addons");

//  ----- Grouping and Dragging -----//

// const DraggableContainer = Draggable.Container;
// const Toolbar = ToolsPanel.AdvancedToolbar;
const GroupedColumnsPanel = ToolsPanel.GroupedColumnsPanel;
const CustomToolbar = ({
  groupBy,
  onColumnGroupAdded,
  onColumnGroupDeleted
}) => {
  return (
    <Toolbar >
      <GroupedColumnsPanel
        groupBy={groupBy}
        onColumnGroupAdded={onColumnGroupAdded}
        onColumnGroupDeleted={onColumnGroupDeleted}
        
      />
    </Toolbar>
  );
};

const groupColumn = columnKey => groupBy => {
  console.log("Grouping start time:", new Date())
  const columnGroups = groupBy.slice(0);
  const activeColumn = columns.find(c => c.key === columnKey);
  const isNotInGroups =
    columnGroups.find(c => activeColumn.key === c.name) == null;
  if (isNotInGroups) {
    columnGroups.push({ key: activeColumn.key, name: activeColumn.name });
  }
  console.log("Grouping End Time:", new Date())
  return columnGroups;
};

const ungroupColumn = columnKey => groupBy => {
  return groupBy.filter(g =>
    typeof g === "string" ? g !== columnKey : g.key !== columnKey
  );
};


const selectors = Data.Selectors;
const {
  NumericFilter,
  AutoCompleteFilter,
  MultiSelectFilter,
  SingleSelectFilter
} = Filters;
const columns = [
  {
    key: "id",
    name: "ID",
    filterRenderer: NumericFilter,
    sortDescendingFirst: true
  },
  {
    key: "firstName",
    name: "First Name",
    filterRenderer: AutoCompleteFilter
  },
  {
    key: "lastName",
    name: "Last Name",
    filterRenderer: AutoCompleteFilter
  },
  {
    key: "jobTitle",
    name: "Job Title",
    filterRenderer: MultiSelectFilter
  },
  {
    key: "jobArea",
    name: "Job Area",
    filterRenderer: SingleSelectFilter
  },
  {
    key: "jobType",
    name: "Job Type"
  },
  {
    key: "email",
    name: "Email"
  },
  {
    key: "street",
    name: "Street"
  },
  {
    key: "zipCode",
    name: "ZipCode"
  },
  {
    key: "date",
    name: "Date"
  },
  {
    key: "catchPhrase",
    name: "Catch Phrase"
  }
].map(c => ({ ...c, ...defaultColumnProperties }));

// const ROW_COUNT = 50;


//  ----- Sorting -----//
 const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
  const comparer = (a, b) => {

    // ----- for sorting date columns -----//
    if (sortColumn === "date")
    {
      const momentA = moment(a[sortColumn])
      const momentB = moment(b[sortColumn])
      if (sortDirection === 'ASC') {
        return momentA.isAfter(momentB) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return momentA.isBefore(momentB) ? 1 : -1;
      }
    };
    // ----- for Ascending order -----
    if (sortDirection === "ASC") {
      if (a === b) 
        return 0;
      if (a[sortColumn] === null || a[sortColumn] === "" )
        return 1;
      if (b[sortColumn] === null || b[sortColumn] === "")
        return -1;
      else
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } 
    // ----- for Descending order -----
    if (sortDirection === "DESC") {
      if (a === b) 
        return 0;
      if (a[sortColumn] === null || a[sortColumn] === "" )
        return -1;
      if (b[sortColumn] === null || b[sortColumn] === "")
        return 1;
      else
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
   
  };
  console.log(sortColumn)
    
  return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

//  ----- Filtering the Columns -----
const handleFilterChange = filter => filters => {
  const newFilters = { ...filters };
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter;
  } else {
    delete newFilters[filter.column.key];
  }
  return newFilters;
};

function getValidFilterValues(rows, columnId) {
  console.log("Filtering Start Time:", new Date())
  return rows
    .map(r => r[columnId])
    .filter((item, i, a) => {
      return i === a.indexOf(item);
    });
}

function getRows(rows, filters) {
  return selectors.getRows({ rows, filters });
}



export default function AdvFilters1({ initialRows }) {
  const [ rows, setRows ] = useState(initialRows);
  const [groupBy, setGroupBy] = useState([]);
  const [filters, setFilters] = useState([]);
  const groupedRows = Data.Selectors.getRows({ rows,filters, groupBy });
  const [isVisible,setVisibility] = useState(true);
 // const filteredRows = getRows(rows, filters);
  function resetFilter(){
    document.getElementsByClassName("btn")[0].click()
    setVisibility (false)
  }
  const[state,setState]=useState(
    {
      columns:[],
      rows:[]
   }
  )

  // ----- Reordering -----
  useEffect(() => {
    setState({columns:columns,rows:rows});
  }, [])

  const onHeaderDrop = (source, target) => {
    const stateCopy = Object.assign({}, state);
    const columnSourceIndex = state.columns.findIndex(
       i => i.key === source
     );
    const columnTargetIndex = state.columns.findIndex(
       i => i.key === target
     );
     stateCopy.columns.splice(
       columnTargetIndex,
       0,
       stateCopy.columns.splice(columnSourceIndex, 1)[0]
     );
    const emptyColumns = Object.assign({}, state, { columns: [] });
    setState(emptyColumns);

    const reorderedColumns = Object.assign({}, state, {
      Columns: stateCopy.columns
    });
    setState(reorderedColumns,rows);
  };

  return (
    <>
    <DraggableContainer onHeaderDrop={onHeaderDrop}>
      <ReactDataGrid
        columns={state.columns}
        rowGetter={i => groupedRows[i]}
        rowsCount={groupedRows.length}
        minHeight={650}
        enableDragAndDrop={true}
        toolbar={
          <Toolbar 
            enableFilter={true}
            filterRowsButtonText="Column Filter"
          > 
            {isVisible&&<button type="button" className="btn" onClick ={resetFilter} >Reset</button>}
            <CustomToolbar
              groupBy={groupBy}
              onColumnGroupAdded={columnKey => setGroupBy(groupColumn(columnKey))}
              onColumnGroupDeleted={columnKey => setGroupBy(ungroupColumn(columnKey))}
            />
          </Toolbar>
        }
        onAddFilter={filter => setFilters(handleFilterChange(filter))}
        onClearFilters={() => setFilters({})}
        getValidFilterValues={columnKey => getValidFilterValues(rows, columnKey)}
        
        onGridSort={(sortColumn, sortDirection) =>
          setRows(sortRows(initialRows, sortColumn, sortDirection))}
      />
    </DraggableContainer> 
     <div>{rows.length}</div>
     </>
  );
}


 