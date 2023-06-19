import { createSlice } from "@reduxjs/toolkit";
import { Products} from "./products";

const initialState = {
    Product : Products,
    Cart : []
}

const slicer = createSlice({
    name : "Slices",
    initialState,
    reducers : {
        addCart:(state,action) => {
            state.Product.forEach(function(data) {
                if(data._id === action.payload._id){
                    data.Stock -= 1
                    console.log("outer")
                    if(state.Cart.length){
                        console.log("if condition")
                        let status = false
                     state.Cart.forEach((data1) => {
                        
                        if(data1._id === action.payload._id){
                            status = true
                        }
                     })
                     if(status){
                        state.Cart.forEach((data1) => {
                            if(data1._id === action.payload._id){
                                data1.Stock += 1
                            }
                        })   
                    }
                    else{
                        state.Cart.push({...action.payload, Stock : 1})
                    }
                }else{
                        state.Cart.push({...action.payload, Stock : 1})
                    }
                }
            })
        },
        RemoveCart:(state, action) => {
            state.Product.forEach(function(data) {
                if(data._id === action.payload._id){
                    data.Stock += action.payload.Stock
                    state.Cart = state.Cart.filter(data => data._id !== action.payload._id)
                }
            })
            
        },
        increementCart:(state, action) => {
            state.Cart.forEach(function(data) {
                if(data._id === action.payload._id){
                   data.Stock += 1
                }
            })
            state.Product.forEach(function(data) {
                if(data._id === action.payload._id){
                    data.Stock -= 1
                }
            })
        },
        decreementCart:(state, action) => {
            state.Cart.forEach(function(data) {
                if(data._id === action.payload._id){
                   data.Stock -= 1
                   if(data.Stock < 1){
                        state.Cart = state.Cart.filter(data => data._id !== action.payload._id)
                   }
                }
            })
            state.Product.forEach(function(data) {
                if(data._id === action.payload._id){
                    data.Stock += 1
                }
            })
        }
    }
})
export default slicer.reducer
export const {addCart, RemoveCart, increementCart, decreementCart} = slicer.actions