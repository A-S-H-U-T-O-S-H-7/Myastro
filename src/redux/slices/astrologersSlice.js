import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectAstrologersData: {},
  astrologerFetched: false,
};

const astrologersSlice = createSlice({
  name: "astrologers",
  initialState,
  reducers: {
    setSelectAstrologer(state, action) {
      state.selectAstrologersData = action.payload;
      state.astrologerFetched = true;
    },
    clearSelectedAstrologer(state) {
      state.astrologerFetched = false;
      state.selectAstrologersData = {};
    },
  },
});

export const { setSelectAstrologer, clearSelectedAstrologer } =
  astrologersSlice.actions;
export default astrologersSlice.reducer;
