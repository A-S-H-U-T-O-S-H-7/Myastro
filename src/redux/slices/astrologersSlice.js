import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  astrologers: [], 
  selectedAstrologer: null, 
};

const astrologersSlice = createSlice({
  name: 'astrologers',
  initialState,
  reducers: {
    setAstrologers(state, action) {
      state.astrologers = action.payload;
    },
    selectAstrologer(state, action) {
      state.selectedAstrologer = action.payload;
    },
    clearSelectedAstrologer(state) {
      state.selectedAstrologer = null;
    },
  },
});

export const { setAstrologers, selectAstrologer, clearSelectedAstrologer } = astrologersSlice.actions;
export default astrologersSlice.reducer;
