import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "light",
};
const slice = createSlice({
  name: "main-Slice",
  initialState: initialState,
  reducers: { 
    setToggleTheme(state, action: PayloadAction<string>) {
        
        state.theme = action.payload;
    },
  },
});
export const { setToggleTheme } = slice.actions;
export default slice.reducer;
