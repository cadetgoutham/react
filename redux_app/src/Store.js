import {configureStore} from '@reduxjs/toolkit'
import Reducer from './Slices/ReduxSlice'

const Store = configureStore(
    {
        reducer:{
            tasks : Reducer
        }
    }
)

export default Store
