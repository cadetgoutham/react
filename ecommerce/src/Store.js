import { configureStore } from '@reduxjs/toolkit'
import Reducer, { CART_KEY } from './Details/Reducerslicer'

const Store = configureStore({
    reducer: {
        Details: Reducer
    }
})

let lastCart = Store.getState().Details.Cart
Store.subscribe(() => {
    const cart = Store.getState().Details.Cart
    if (cart === lastCart) return
    lastCart = cart
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(cart))
    } catch {
        // storage unavailable; cart just won't persist
    }
})

export default Store
