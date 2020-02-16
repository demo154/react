import React,{useState} from 'react'
import ReactDataGrid from "react-data-grid";
import "../components/styles.css";
const defaultColumnProperties={
    sortable:true,
    width: 160
}
const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' } ].map(c => ({ ...c, ...defaultColumnProperties })); ;

const data = [{id: 0, title: '', count: 20}, {id: 1, title: 'row1', 
    count: 40}, {id: 2, title: '', count: 60}];


//--------Sorting Null values In Asc and Desc---------//

const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
const comparer = (a, b) => {

        if (sortDirection === "ASC") {
          if(a==b){
            return 0;
          }
       else if(a[sortColumn]===null || a[sortColumn]===''){
          return 1;
        }
        else if(b[sortColumn]===null || b[sortColumn]===''){
          return -1;
        }
        else{
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
        }
        } 
         if (sortDirection === "DESC") {
          if(a==b){
            return 0;
          }
       else if(a[sortColumn]===null || a[sortColumn]===''){
          return -1;
        }
        else if(b[sortColumn]===null || b[sortColumn]===''){
          return 1;
        }
        else{
          return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
        }
      };
      return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
      };
      
    export default function Example({initialRows}) {
    const [rows, setRows] = useState([{id: 0, title: '', count: 20}, {id: 1, title: 'row1', 
    count: 40}, {id: 2, title: '', count: 60}]);
     return (
        <div>
          <ReactDataGrid 
            columns={columns}
            rowGetter={i=>rows[i]}
            rowsCount={3}
            minHeight={150}
            onGridSort={(sortColumn, sortDirection) =>
                setRows(sortRows(initialRows, sortColumn, sortDirection))}
          />
    
        </div>
      );
}

 
