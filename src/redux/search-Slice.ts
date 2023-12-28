import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryVideo } from "../api/endpoints";
import { dataItems } from "../types/types";
type initialStateType = {
  searchParams: string;
  dataItems: dataItems | null;
  isFetch: boolean;
};
const initialState: initialStateType = {
  searchParams: "",
  dataItems: null,
  isFetch: false,
};
export const getVideoBySearch = createAsyncThunk<void, { q: string | undefined }>(
  "search-slice/getVideoBySearch",
  async ({ q }, { dispatch }) => {
    try {
      dispatch(toggleFetch(true));
      const data = await categoryVideo.getSearchVideo({
        q,
        part: "snippet,id",
        regionCode: "RU",
        maxResults: "50",
        order: "relevance",
      });
      console.log(data);

      dispatch(setDataItems(data.data));
      dispatch(toggleFetch(false));
    } catch (error) {
      console.log(error);
    }
  }
);
const searchSlice = createSlice({
  name: "search-Slice",
  initialState: initialState,
  reducers: {
    setSearchParams(state, action: PayloadAction<string>) {
      state.searchParams = action.payload;
    },
    setDataItems(state, action: PayloadAction<dataItems>) {
      state.dataItems = action.payload;
    },
    toggleFetch(state, action: PayloadAction<boolean>) {
      state.isFetch = action.payload;
    },
  },
});
export const { setSearchParams, setDataItems, toggleFetch } =
  searchSlice.actions;
export default searchSlice.reducer;
