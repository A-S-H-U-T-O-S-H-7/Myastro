import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  popup: false,
  details: {},
  userToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showlodaer(state) {
      state.loading = true;
    },
    hidelodaer(state) {
      state.loading = false;
    },
    showLoginPopup(state) {
      state.popup = true;
    },
    setLoginPopupOff(state) {
      state.popup = false;
    },
    loginSuccess(state, action) {
      console.log(action);
      state.loading = false;
      state.isAuthenticated = true;
      state.popup = false;
      state.details = action.payload.user;
      state.userToken = action.payload.token;
    },

    loginFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.popup = false;
      state.details = {};
      state.userToken = "";
    },
  },
});

export const {
  showlodaer,
  hidelodaer,
  showLoginPopup,
  setLoginPopupOff,
  loginSuccess,
  loginFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
