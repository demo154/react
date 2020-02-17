import React,{useState,useEffect} from "react";
import ReactDataGrid from "react-data-grid";
const {
  DraggableHeader: { DraggableContainer }
} = require("react-data-grid-addons");



const cols = [
    { key: "id", name: "ID", editable: true,draggable:true },
    { key: "title", name: "Title", editable: true,draggable:true },
    { key: "complete", name: "Complete", editable: true,draggable:true }
  ];
  
  const rws = [
    { id: 0, title: "Task 1", complete: 20 },
    { id: 1, title: "Task 2", complete: 40 },
    { id: 2, title: "Task 3", complete: 60 }
  ];
  
export default function ReOrdering(){
   const[state,setState]=useState(
     {
      //  Columns:[],
      //  Rows:[]
    }
   )

  //  useEffect(() => {
  //    setState({Columns:cols,Rows:rws});
  //  }, [])
   const onHeaderDrop = (source, target) => {
       const stateCopy = Object.assign({}, state);
       const columnSourceIndex = state.Columns.findIndex(
          i => i.key === source
        );
       const columnTargetIndex = state.Columns.findIndex(
          i => i.key === target
        );
        stateCopy.Columns.splice(
          columnTargetIndex,
          0,
          stateCopy.Columns.splice(columnSourceIndex, 1)[0]
        );
        const emptyColumns = Object.assign({}, state, { Columns: [] });
    setState(emptyColumns);

    const reorderedColumns = Object.assign({}, state, {
      Columns: stateCopy.Columns
    });
    setState(reorderedColumns,rws);
             };
    
      
        return (
          <>
          <DraggableContainer onHeaderDrop={onHeaderDrop}>
            <ReactDataGrid
              columns={cols}
              rowGetter={i => rws[i]}
              rowsCount={rws.length}
              minHeight={500}
            />
          </DraggableContainer>
          </>
        );
}
