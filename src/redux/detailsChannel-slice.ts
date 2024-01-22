import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryVideo } from "../api/endpoints";
import { ChannelItem } from "../types/ChannelType";
import { Item,  } from "../types/types";
type initialStateType = {
    defineChannel: ChannelItem| null
  isFetch: boolean; 
  isError: boolean
  channelVideos:  Item[]
};
const initialState: initialStateType = {
  defineChannel: null,
  isFetch: false, 
  isError: false, 
  channelVideos: []
};

export const getChannelDetails = createAsyncThunk<void, { id: string | undefined }>(
  "channel-slice/getChannelDetails",
  async ({ id }, { dispatch }) => {
    try {
      dispatch(toggleFetch(true));
      const channel = await categoryVideo.getChannelDetails({
        part: "snippet,statistics",
        id
      });   
      const data = await categoryVideo.getSuggestedVideo({part: 'snippet,id',maxResults:50,channelId: id,order:'date'}) 
      console.log(data);
      dispatch(setChannelVideo(data.data.items))
      dispatch(setChannelDeatils(channel.data.items[0]))
    } catch (error) {
      console.log(error);  
      dispatch(setError(true))
    }finally{ 
        dispatch(toggleFetch(false))
    }
  }
);

const channelDetails = createSlice({
  name: "channel-Slice",
  initialState: initialState,
  reducers: {
    toggleFetch(state, action: PayloadAction<boolean>) {
      state.isFetch = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
    setChannelDeatils(state, action: PayloadAction<ChannelItem>) {
      state.defineChannel = action.payload;
    },
    setChannelVideo(state, action: PayloadAction<Item[]>) {
      state.channelVideos = action.payload;
    },
  },
});
export const {
  setChannelVideo,
  toggleFetch,  
  setError,
  setChannelDeatils
} = channelDetails.actions;
export default channelDetails.reducer;
