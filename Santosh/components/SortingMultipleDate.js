import React, { useState, Fragment, useEffect } from "react";
import ReactDataGrid from "react-data-grid";
import {Toolbar, Data, Filters, ToolsPanel, Draggable } from "react-data-grid-addons";
import "./styles.css";
import moment from "moment";


const defaultColumnProperties = {
  filterable: true,
  draggable: true,
  sortable : true,
  width: 160
};


//  ----- Grouping and Dragging -----//

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
    "type" : "NUMBER"
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
    "type" : "RAW"
  },
  {
    "key" : "stu_sbj_uuid",
    "name" : "STU_SBJ_UUID",
    "type" : "RAW"
  },
  {
    "key" : "stu_sbj_prf_evt_uuid",
    "name" : "STU_SBJ_PRF_EVT_UUID",
    "type" : "RAW"
  },
  {
    "key" : "stu_name",
    "name" : "STU_NAME",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_env_name",
    "name" : "STU_ENV_NAME",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_site_name",
    "name" : "STU_SITE_NAME",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_sbj_num",
    "name" : "STU_SBJ_NUM",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_sbj_prf_evt_name",
    "name" : "STU_SBJ_PRF_EVT_NAME",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_sbj_prf_evt_oid",
    "name" : "STU_SBJ_PRF_EVT_OID",
    "type" : "VARCHAR2"
  },
  {
    "key" : "stu_sbj_prf_evt_ord_num",
    "name" : "STU_SBJ_PRF_EVT_ORD_NUM",
    "type" : "NUMBER"
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


//  ----- Sorting -----//

 const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
  const comparer = (a, b) => {
  
    if (sortColumn === "chemdt" ||"chemdt_dt" || "chemdt_int" )
    {
      const momentA = moment(a[sortColumn].slice(0,a[sortColumn].indexOf(' ')));
      const momentB = moment(b[sortColumn].slice(0,b[sortColumn].indexOf(' ')));
      
      if (sortDirection === 'ASC') {
        return momentA.isAfter(momentB) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return momentA.isBefore(momentB) ? 1 : -1;
      }
    };  
   
  };
      return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

//  ----- Filtering the Columns -----//

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

function getRows(rows, filters) {
  return selectors.getRows({ rows, filters });
}

export default function AdvFilters1({ initialRows }) {
  const [ rows, setRows ] = useState();
  const [groupBy, setGroupBy] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const groupedRows = Data.Selectors.getRows({ rows,filters, groupBy });
  const [isVisible,setVisibility] = useState(true);
  
  function reset(){
    document.getElementsByClassName("btn")[0].click()
 
    setVisibility = false;
  }

  
useEffect(()=>{
  fetch('/chemtd.json')
  .then(response => response.json())
  .then(json => setRows(json.items))

  setTimeout(() => {
    setIsLoading(false)
  }, 3000);
})

  return (
  <Fragment>
    {isLoading ? (
      <div>
        <img
          src="https://webtracker.bajajallianz.com/PROPOSALTRACKER/img/loading.gif"
          alt="Loading..."
          width="140"
          style={{ marginTop: '25%', marginLeft: '45%' }}
        />
      </div>
    ) : (

    <>
    <DraggableContainer>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => groupedRows[i]}
        rowsCount={groupedRows.length}
        minHeight={650}
        enableDragAndDrop={true}
        toolbar={
          <Toolbar enableFilter={true} filterRowsButtonText='Column Filters' > 
            {isVisible&&<button type="button" className="btn" onClick ={reset} >Reset</button>}
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
     <div>{groupedRows.length} Rows</div> 
 </>)}</ Fragment>
  );
}


 