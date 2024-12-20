import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false, 
  loading: false,  
  popup:false,                  
  details: {},          
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showlodaer(state) {
      state.loading = true;
    },
    hidelodaer(state) {
      state.loading = false;
    },
    showLoginPopup(state){
      state.popup = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.popup = false;
      state.details = action.payload;
    },

    loginFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.popup = false;
      state.details = {};
    }
  },
});

export const { 
  showlodaer, 
  hidelodaer,
  showLoginPopup,
  loginSuccess, 
  loginFailure, 
  logout
} = userSlice.actions;

export default userSlice.reducer;
