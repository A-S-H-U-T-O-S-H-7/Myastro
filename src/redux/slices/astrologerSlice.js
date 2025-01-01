import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAstrologerAuthenticated: false,
  astrologerDetails: {},
  astrologerToken:null
};

const astrologerSlice = createSlice({
  name: 'astrologer',
  initialState,
  reducers: {
    login(state, action) {
      state.isAstrologerAuthenticated = true;
      state.astrologerDetails = action.payload.astrologer;
      state.astrologerToken = action.payload.token;
    },
    logout(state) {
      state.isAstrologerAuthenticated = false;
      state.astrologerDetails = {};
      state.astrologerToken = null;
    },
  },
});

export const { login, logout } = astrologerSlice.actions;
export default astrologerSlice.reducer;
