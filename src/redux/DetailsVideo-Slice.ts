
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryVideo } from "../api/endpoints";
import { dataItems } from "../types/types";
import { VideoItems } from "../types/videostypes";
type initialStateType = {
  searchParams: string;
  dataItems: VideoItems | null;
  isFetch: boolean;  
  videoList: dataItems | null;
};
const initialState: initialStateType = {
  searchParams: "",
  dataItems: null,
  isFetch: false, 
  videoList: null
};
export const getVideoByID = createAsyncThunk<void, { id:string | undefined }>(
  "details-slice/getVideoByID",
  async ({ id }, { dispatch }) => {
    try { 

      dispatch(toggleFetch(true));
      const data = await categoryVideo.getVideoByID({
        id,
        part:'contentDetails,snippet,statistics', 
      });
      const dataVIdeo = await categoryVideo.getSuggestedVideo({
        relatedToVideoId: id,
        part: 'id,snippet',
        type: 'video',
        maxResults: '50', 
        regionCode: 'RU'
      });
      console.log(data);
      console.log(dataVIdeo);
      
      dispatch(setDataItems(data.data)); 
      dispatch(setVideoList(dataVIdeo.data))
      dispatch(toggleFetch(false));
    } catch (error) {
      console.log(error);
    }
  }
);
const videoDetails = createSlice({
  name: "deatils-Slice",
  initialState: initialState,
  reducers: {
    setSearchParams(state, action: PayloadAction<string>) {
      state.searchParams = action.payload;
    },
    setDataItems(state, action: PayloadAction<VideoItems>) {
      state.dataItems = action.payload;
    },
    toggleFetch(state, action: PayloadAction<boolean>) {
      state.isFetch = action.payload;
    },
    setVideoList(state, action: PayloadAction<dataItems>){ 
        state.videoList = action.payload
    }
  },
});
export const { setSearchParams, setDataItems, toggleFetch,setVideoList } =
  videoDetails.actions;
export default videoDetails.reducer;
