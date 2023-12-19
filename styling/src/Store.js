import { configureStore } from "@reduxjs/toolkit";
import SlicerReducer from "./Slicer/SlicerReducer";

const store = configureStore(
    {
        reducer:{
            details : SlicerReducer
        }
    }
)

export default store