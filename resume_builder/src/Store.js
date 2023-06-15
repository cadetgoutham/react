import {configureStore} from '@reduxjs/toolkit'
import Reducer from './Slice/ReduxSlicer'

const Store = configureStore(
    {
        reducer:{
            Details : Reducer
        }
    }
)

export default Store