import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import astrologersReducer from './slices/astrologersSlice';
import astrologerReducer  from './slices/astrologerSlice';
import adminReducer from './slices/adminSlice';
import chatReducer from './slices/chatSlice';
import callReducer from './slices/callSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    astrologer: astrologerReducer,
    admin: adminReducer,
    astrologers: astrologersReducer,
    chat: chatReducer,
    call: callReducer,
  },
});

export default store;
