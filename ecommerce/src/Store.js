import {configureStore} from '@reduxjs/toolkit'
import Reducer from './Details/Reducerslicer'

const Store = configureStore(
    {
        reducer:{
            Details : Reducer
        }
    }
)

export default Store