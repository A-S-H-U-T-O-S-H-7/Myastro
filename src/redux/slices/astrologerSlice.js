import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  details: {},
};

const astrologerSlice = createSlice({
  name: 'astrologer',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.details = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.details = {};
    },
  },
});

export const { login, logout } = astrologerSlice.actions;
export default astrologerSlice.reducer;
