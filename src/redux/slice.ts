import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryVideo } from "../api/endpoints";
import { dataItems } from "../types/types";
type initialStateType = { 
  theme: string, 
  currentCategory: string
  dataItems: dataItems | null 
  isFetch: boolean
}
const initialState:initialStateType = {
  theme: "dark",
  currentCategory: "suggested",
  dataItems: null, 
  isFetch: false
};
export const getVideoByCatrgories = createAsyncThunk<void, {q:string}>(
  "main-slice/getVideoByCatrgories",
  async ({q},{dispatch}) => { 
    try { 
      dispatch(toggleFetch(true))
      const data = await categoryVideo.getSearchVideo({
        q,
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '50',
        order: 'viewCount',
      }); 
      console.log(data);
      
      dispatch(setDataItems(data.data))
      dispatch(toggleFetch(false))
    } catch (error) {
      console.log(error);
    }
  }
);
const slice = createSlice({
  name: "main-Slice",
  initialState: initialState,
  reducers: {
    setToggleTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
    }, 
    setDataItems(state, action:PayloadAction<dataItems>){ 
      state.dataItems = action.payload
    }, 
    toggleFetch(state, action:PayloadAction<boolean>){ 
      state.isFetch = action.payload
    }
  },
});
export const { setToggleTheme, setCategory,setDataItems, toggleFetch } = slice.actions;
export default slice.reducer;
