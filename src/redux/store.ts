import { configureStore } from '@reduxjs/toolkit' 
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import slice from './slice'
const store = configureStore({ 
    reducer:{ 
        slice: slice
    }
}) 
export default store
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector