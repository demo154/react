import React, { useState,useEffect} from "react";
import ReactDataGrid from "react-data-grid";
import {Toolbar, Data, Filters, ToolsPanel, Draggable, DraggableHeader } from "react-data-grid-addons";
import "../components/styles.css";

const defaultColumnProperties = {
  filterable: true,
  draggable: true,
 
  width: 160
};

const {
  // Draggable: { Container},
   DraggableHeader: {DraggableContainer}
} = require('react-data-grid-addons');


const Container = Draggable.Container;

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
    sortDescendingFirst: true,
    frozen:true
  },
  {
    key: "firstName",
    name: "First Name",
    filterRenderer: AutoCompleteFilter,
    frozen:true
  },
  {
    key: "lastName",
    name: "Last Name",
    filterRenderer: AutoCompleteFilter,
    frozen:true
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

// function getRows(rows, filters) {
//   return selectors.getRows({ rows, filters });
// }

export default function Example({ rows}) {

  const [groupBy, setGroupBy] = useState([]);
  const [filters, setFilters] = useState([]);
  const groupedRows = Data.Selectors.getRows({ rows,filters, groupBy });
  const [isVisible,setVisibility] = useState(true );
 // const filteredRows = getRows(rows, filters);
 function reset(){

  document.getElementsByClassName("btn")[0].click()
 }
  // const [isVisible] = useState(false);
//  function filter(){
//  document.getElementsByClassName("btn")[0].click()
//   setVisibility(true)
//  }

const[state,setState]=useState(
    {
      columns:[],
      rows:[]
   }
  )

  useEffect(() => {
    setState({columns:columns,rows:rows});
  }, [])

const onHeaderDrop = (source, target) => {
    console.log(source)
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
    <DraggableContainer onHeaderDrop={onHeaderDrop}>
    <ReactDataGrid
      columns={state.columns}
      rowGetter={i => groupedRows[i]}
      rowsCount={ROW_COUNT}
      minHeight={650}
      enableDragAndDrop={true}
      toolbar={<Toolbar  enableFilter={true} > {isVisible&&<button type="button" className="btn" onClick={reset} >Reset</button>}
      {/* <CustomToolbar
     groupBy={groupBy}
     onColumnGroupAdded={columnKey => setGroupBy(groupColumn(columnKey))}
     onColumnGroupDeleted={columnKey => setGroupBy(ungroupColumn(columnKey))}
   /> */}
   </Toolbar>
}
      onAddFilter={filter => setFilters(handleFilterChange(filter))}
     onClearFilters={() => setFilters({})}
      getValidFilterValues={columnKey => getValidFilterValues(rows, columnKey)}
      // onGridSort={(sortColumn, sortDirection) =>
      //   setRows(sortRows(initialRows, sortColumn, sortDirection))}
    />
    </DraggableContainer>
     
  );
}
