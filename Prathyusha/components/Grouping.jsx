

import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";
import {Toolbar, Data, Filters, ToolsPanel, Draggable } from "react-data-grid-addons";
import "../components/styles.css";

const defaultColumnProperties = {
  filterable: true,
  draggable: true,sortable:true,
  width: 160
};

//----- Grouping and Dragging -----//

const DraggableContainer = Draggable.Container;
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
        onColumnGroupDeleted={onColumnGroupDeleted}  />
       </Toolbar>
  );
};

const groupColumn = columnKey => groupBy => {
  const columnGroups = groupBy.slice(0);
  const activeColumn = columns.find(c => c.key === columnKey);
  const isNotInGroups =
    columnGroups.find(c => activeColumn.key === c.name) == null;
  if (isNotInGroups) {
    columnGroups.push({ key: activeColumn.key, name: activeColumn.name });
  }
  return columnGroups;
};

const ungroupColumn = columnKey => groupBy => {
  return groupBy.filter(g =>
    typeof g === "string" ? g !== columnKey : g.key !== columnKey
  );
};

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

const ROW_COUNT = 50;

 //-----Sorting-------//

const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
  const comparer = (a, b) => {
    if (sortDirection === "ASC") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else if (sortDirection === "DESC") {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
      else if(a === b){
        return 0;}
        else if(a === null){
          return 1;}
          else if(b === null){
            return -1;}
  };
  return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

//----- Filtering the Columns -----//

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
  return rows
    .map(r => r[columnId])
    .filter((item, i, a) => {
      return i === a.indexOf(item);
    });
}
function reset(){
  document.getElementsByClassName("btn")[0].click()
 }

export default function Example({initialRows}) {
  const [rows,setRows]=useState(initialRows)
  const [groupBy, setGroupBy] = useState([]);
  const [filters, setFilters] = useState([]);
  const groupedRows = Data.Selectors.getRows({ rows,filters, groupBy });
  const [isVisible,setVisibility] = useState(true );
 
  
  return (
    <DraggableContainer>
    <ReactDataGrid
      columns={columns}
      rowGetter={i => groupedRows[i]}
      rowsCount={ROW_COUNT}
      minHeight={650}
      enableDragAndDrop={true}
      toolbar={<Toolbar  enableFilter={true} > {isVisible&&<button type="button" className="btn" onClick={reset} >Reset</button>}
      <CustomToolbar
     groupBy={groupBy}
     onColumnGroupAdded={columnKey => setGroupBy(groupColumn(columnKey))}
     onColumnGroupDeleted={columnKey => setGroupBy(ungroupColumn(columnKey))}
   /></Toolbar>
}
     onAddFilter={filter => setFilters(handleFilterChange(filter))}
     onClearFilters={() => setFilters({})}
      getValidFilterValues={columnKey => getValidFilterValues(rows, columnKey)}
      onGridSort={(sortColumn, sortDirection) =>
        setRows(sortRows(initialRows, sortColumn, sortDirection))}
    />
    </DraggableContainer> 
  );
}


 