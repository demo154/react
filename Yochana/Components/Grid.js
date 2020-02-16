import React, { useState, useEffect } from "react";
import ReactDataGrid from "react-data-grid";
import {Toolbar, Data, Filters, ToolsPanel, Draggable } from "react-data-grid-addons";
import moment from "moment";
// import chemdt from '../Components/chemdt.json'


const defaultColumnProperties = {
  filterable: true,
  draggable: true,
  sortable : true,
  width: 160
};

// ----- ReOrdering ----- //
// const {
//   DraggableHeader: { DraggableContainer }
  
// } = require("react-data-grid-addons");


//  ----- Grouping and Dragging ----- //
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
        onColumnGroupDeleted={onColumnGroupDeleted}
        
      />
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


const selectors = Data.Selectors;
const {
  NumericFilter,
  AutoCompleteFilter,
  MultiSelectFilter,
  SingleSelectFilter
} = Filters;
const columns = [
  {
    "key" : "analyte",
    "name" : "ANALYTE",
    "type" : "VARCHAR2",
    filterRenderer: MultiSelectFilter,
    sortDescendingFirst: true
  },
  {
    "key" : "analytev",
    "name" : "ANALYTEV",
    "type" : "NUMBER",
    filterRenderer: NumericFilter
  },
  {
    "key" : "chemdt",
    "name" : "CHEMDT",
    "type" : "VARCHAR2",
    filterRenderer: AutoCompleteFilter
  },
  {
    "key" : "chemdt_dt",
    "name" : "CHEMDT_DT",
    "type" : "TIMESTAMP",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "chemdt_int",
    "name" : "CHEMDT_INT",
    "type" : "TIMESTAMP",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "chemdt_iso8601_char",
    "name" : "CHEMDT_ISO8601_CHAR",
    "type" : "VARCHAR2",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "highr",
    "name" : "HIGHR",
    "type" : "NUMBER",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "linkvar",
    "name" : "LINKVAR",
    "type" : "VARCHAR2",
    filterRenderer: AutoCompleteFilter,
  },
  {
    "key" :"lowr",
    "name" : "LOWR",
    "type" : "NUMBER"
  },
  {
    "key" : "units",
    "name" : "UNITS",
    "type" : "VARCHAR2"
  },
  {
    "key" : "visitid",
    "name" : "VISITID",
    "type" : "VARCHAR2"
  },
  {
    "key" : "clidiv_uuid",
    "name" : "CLIDIV_UUID",
    "type" : "RAW"
  },
  {
    "key" : "stu_uuid",
    "name" : "STU_UUID",
    "type" : "RAW"
  },
  {
    "key" : "stu_env_uuid",
    "name" : "STU_ENV_UUID",
    "type" : "RAW"
  },
  {
    "key" : "stu_site_uuid",
    "name" : "STU_SITE_UUID",
    "type" : "RAW",
    filterRenderer: MultiSelectFilter
  },
  {
    "key" : "stu_sbj_uuid",
    "name" : "STU_SBJ_UUID",
    "type" : "RAW"
  },
  {
    "key" : "stu_sbj_prf_evt_uuid",
    "name" : "STU_SBJ_FRM_DATA_UUID",
    "type" : "RAW",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "stu_name",
    "name" : "STU_NAME",
    "type" : "VARCHAR2",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "stu_env_name",
    "name" : "STU_ENV_NAME",
    "type" : "VARCHAR2",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "stu_site_name",
    "name" : "STU_SITE_NAME",
    "type" : "VARCHAR2",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "stu_sbj_num",
    "name" : "STU_SBJ_NUM",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_sbj_prf_evt_name",
    "name" : "STU_SBJ_PRF_EVT_NAME",
    "type" : "VARCHAR2",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "stu_sbj_prf_evt_oid",
    "name" : "STU_SBJ_PRF_EVT_OID",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_sbj_prf_evt_ord_num",
    "name" : "STU_SBJ_PRF_EVT_ORD_NUM",
    "type" : "NUMBER",
    filterRenderer: SingleSelectFilter
  },
  {
    "key" : "prf_dat",
    "name" : "PRF_DAT",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_sbj_frm_oid",
    "name" : "STU_SBJ_FRM_OID",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_sbj_frm_rep_key",
    "name" : "STU_SBJ_FRM_REP_KEY",
    "type" : "NUMBER"
  },
  {
    "key" : "stu_sbj_itm_grp_rep_key",
    "name" : "STU_SBJ_ITM_GRP_REP_KEY",
    "type" : "NUMBER"
  },
  {
    "key" : "metadata_vers_uuid",
    "name" : "METADATA_VERS_UUID",
    "type" : "RAW"
  }
].map(c => ({ ...c, ...defaultColumnProperties }));


// const ROW_COUNT = 50;


//  ----- Sorting ----- //
 const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
  const comparer = (a, b) => {
 
    if (sortColumn === "chemdt" ||"chemdt_dt" || "chemdt_int" )
    {
      const momentA = moment(a[sortColumn])
      const momentB = moment(b[sortColumn])
      // const momentA = moment(a[sortColumn].slice(0,a[sortColumn].indexOf(' ')));
      // const momentB = moment(b[sortColumn].slice(0,b[sortColumn].indexOf(' ')));
    
      if (sortDirection === 'ASC') {
        return momentA.isAfter(momentB) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return momentA.isBefore(momentB) ? 1 : -1;
      }
    };
    
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
      return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

//  ----- Filtering the Columns ----- //
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


export default function Grid({ initialRows }) {
  const [ rows, setRows ] = useState();
  const [groupBy, setGroupBy] = useState([]);
  const [filters, setFilters] = useState([]);
  const groupedRows = Data.Selectors.getRows({ rows,filters, groupBy });
  // console.log("DataLoading End Time :" , new Date())
  const [isVisible,setVisibility] = useState(true);
  
  // ----- Reset Button -----//
  function resetFilter(){
    document.getElementsByClassName("btn")[0].reset()
    setVisibility = false;
  }

  useEffect(() => {
    fetch('/chemdt.json')
    .then(response =>response.json())
    .then(json => setRows(json.items))
  })

  // ----- Reordering -----//
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
        columns={columns}
        rowGetter={i => groupedRows[i]}
        rowsCount={groupedRows.length}
        minHeight={650}
        enableDragAndDrop={true}
        toolbar={
          <Toolbar enableFilter={true} filterRowsButtonText='Column Filters' > 
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
     <div>{groupedRows.length}</div> 
     </>
  );
}


 