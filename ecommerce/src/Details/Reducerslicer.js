import { createSlice } from "@reduxjs/toolkit";
import ProductsData from "./products.json";

const initialState = {
    Product: ProductsData.products, 
    Cart: []
};

const slicer = createSlice({
    name: "Slices",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const product = state.Product.find(p => p._id === action.payload._id);
            
            if (product && product.Stock > 0) {
                product.Stock -= 1;
                const cartItem = state.Cart.find(item => item._id === action.payload._id);

                if (cartItem) {
                    cartItem.Stock += 1;
                } else {
                    state.Cart.push({ ...action.payload, Stock: 1 });
                }
            }
        },

        RemoveCart: (state, action) => {
            const product = state.Product.find(p => p._id === action.payload._id);
            if (product) {
                product.Stock += action.payload.Stock;
            }
            state.Cart = state.Cart.filter(item => item._id !== action.payload._id);
        },

        increementCart: (state, action) => {
            const product = state.Product.find(p => p._id === action.payload._id);
            const cartItem = state.Cart.find(item => item._id === action.payload._id);

            if (product && product.Stock > 0) {
                product.Stock -= 1;
                cartItem.Stock += 1;
            }
        },

        decreementCart: (state, action) => {
            const product = state.Product.find(p => p._id === action.payload._id);
            const cartItem = state.Cart.find(item => item._id === action.payload._id);

            if (cartItem) {
                cartItem.Stock -= 1;
                if (product) product.Stock += 1;

                if (cartItem.Stock < 1) {
                    state.Cart = state.Cart.filter(item => item._id !== action.payload._id);
                }
            }
        }
    }
});

export default slicer.reducer;
export const { addCart, RemoveCart, increementCart, decreementCart } = slicer.actions;