import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCall: null, 
  callHistory: [], 
};

const callSlice = createSlice({
  name: 'call',
  initialState,
  reducers: {
    startCall(state, action) {
      state.activeCall = action.payload;
    },
    endCall(state) {
      if (state.activeCall) {
        state.callHistory.push(state.activeCall); 
        state.activeCall = null;
      }
    },
    clearCallHistory(state) {
      state.callHistory = [];
    },
  },
});

export const { startCall, endCall, clearCallHistory } = callSlice.actions;
export default callSlice.reducer;
