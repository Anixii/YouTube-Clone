import { configureStore } from '@reduxjs/toolkit' 
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import slice from './slice'
import searchSlice from './search-Slice'
import DetailsVideoSlice from './DetailsVideo-Slice'
import detailsChannelSlice from './detailsChannel-slice'
const store = configureStore({ 
    reducer:{ 
        slice: slice, 
        search: searchSlice, 
        video: DetailsVideoSlice, 
        channel: detailsChannelSlice
    }
}) 
export default store
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector