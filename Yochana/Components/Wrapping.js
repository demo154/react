import React from 'react'
import ReactDataGrid from "react-data-grid";
// import "../components/styles.css";
import {Toolbar, Data, Filters } from "react-data-grid-addons";

const defaultColumnProperties={
    sortable:true,  filterable: true
}

const {
    NumericFilter,
    AutoCompleteFilter,
  } = Filters;
const columnHeaders = [
    { key: 'id', name: 'FFFFFF' ,filterRenderer: NumericFilter},
    { key: 'count', name: 'ss',filterRenderer: AutoCompleteFilter } ,
    { key: 'title', name: 'qqqqqqqqqq' }].map(c => ({ ...c, ...defaultColumnProperties })); ;

const rows=[{id: 1, title: 'rrrrrrrr', count: 20}, {id: 1, title: 'row1', 
    count: 400}, {id: 222, title: 'saaaaaaaasdfghjk', count: 60}]


function get_tex_width(txt) {
        var element = document.createElement('canvas');
        var context = element.getContext("2d");
        context.font = "14pt Helvetica";
        return context.measureText(txt).width+16;
      }
      /*---------Transforming arrays by keys-------*/
      const res =  rows.reduce((a, b) => {
        for (let i in b) {
          if (!a[i]) {
            a[i] = [];
          }
          a[i].push(b[i]);

        }
        return a;
      }, {});
      console.log(res)
      //------------------------------Columns Wrapping---------------------------------
      for (var pIdx = 0; pIdx < columnHeaders.length; pIdx++) {
        var pKey = columnHeaders[pIdx].key;
        if (typeof (res[pKey]) !== 'undefined' || res[pKey] != null) {
          var LargerData = res[pKey].reduce(function (a, b) {
               return a.toString().length > b.toString().length ? a : b;
             });
          var dataColmnWidth = get_tex_width(LargerData.toString().toUpperCase());
          var HeadrColmnWidth = get_tex_width(pKey.toString().toUpperCase());
          console.log(pKey, LargerData)

          if (dataColmnWidth >= HeadrColmnWidth) {
            columnHeaders[pIdx].width = dataColmnWidth;
          }
          else {
            columnHeaders[pIdx].width = HeadrColmnWidth;
          }
          console.log(HeadrColmnWidth,dataColmnWidth)
        }
      }
function Wrapping() {
    
    return (
        <div>
        <ReactDataGrid 
          columns={columnHeaders}
          rowGetter={i=>rows[i]}
          rowsCount={3}
          minHeight={150}
        />
  
      </div>
    )
}

export default Wrapping
