import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import {Button} from 'react-bootstrap'

export default function Show() {
  const {MyList} = useSelector(state => state.details)
  const [edit, setEdit] = useState(false) 

  console.log(MyList.length)
  const column = [
    {field : 'name', headerName : "Name" , width :100},
    {field : 'age', headerName : "Age"},
    {headerName : "Edit", cellRenderer : () => {return (<Button onClick={() => setEdit(!edit)}>Edit</Button>)}},
    {headerName : "Edit", cellRenderer : () => {return (<Button>Delete</Button>)}}
  ]
  // const colDef = {
  //   editable : edit
  // }
  return (
    <>
   <br/>
   <br/>
   {MyList.length > 0 ? <div className='ag-theme-alpine' style={{height:'250px',margin : "0 auto"}}> <AgGridReact rowData={MyList} columnDefs={column} /></div> : <div></div>}
    </>
  )
}
