import { createSlice } from "@reduxjs/toolkit";

const InitailState = {
    MyList:[],
    Update:[]
}

const slicer = createSlice(
    {
        name : 'Mystore',
        initialState : InitailState,
        reducers : {
            AddDetails:(state, action) => {
                const id = Math.random() * 100
                let detail = {...action.payload, id}
                state.MyList.push(detail)
            }
        }
    }
)
export default slicer.reducer
export const {AddDetails} = slicer.actions
