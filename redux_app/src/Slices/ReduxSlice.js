import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myList:[],
    UpdateTask:{}
}

const Slice = createSlice({
    name : "Slices",
    initialState,
    reducers : {
        addTaskToList:(state,action) => {
            const id = Math.random() * 100
            let task = {...action.payload,id}
            state.myList.push(task)
        },
        removeTaskFromList:(state,action) => {
            state.myList = state.myList.filter((task) => task.id !== action.payload.id)
        },
        updateTaskInList:(state,action) => {
            state.myList = state.myList.map((task) => task.id === action.payload.id ? action.payload : task )
        },
        setSelectedTask:(state,action) => {
            state.UpdateTask = action.payload
        }
    }
})
export default Slice.reducer
export const {addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask} = Slice.actions