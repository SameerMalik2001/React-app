import {configureStore} from '@reduxjs/toolkit'
import contactSlice from '../Redux/Reducers'


export const store = configureStore({
    reducer:contactSlice
})