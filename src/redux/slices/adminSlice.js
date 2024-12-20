import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  adminDetails: null, 
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginAdmin(state, action) {
      state.isAuthenticated = true;
      state.adminDetails = action.payload;
    },
    logoutAdmin(state) {
      state.isAuthenticated = false;
      state.adminDetails = null;
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
