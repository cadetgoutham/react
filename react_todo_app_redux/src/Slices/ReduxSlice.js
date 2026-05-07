import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myList: [],
    UpdateTask: {}
}

const Slice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTaskToList: (state, action) => {
            const id = Date.now(); 
            state.myList.push({ ...action.payload, id });
        },
        removeTaskFromList: (state, action) => {
            state.myList = state.myList.filter((task) => task.id !== action.payload.id);
        },
        updateTaskInList: (state, action) => {
            const index = state.myList.findIndex(t => t.id === action.payload.id);
            if (index !== -1) {
                state.myList[index] = action.payload;
            }
        },
        setSelectedTask: (state, action) => {
            state.UpdateTask = action.payload;
        }
    }
})

export default Slice.reducer;
export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask } = Slice.actions;