import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeChat: null, 
  chatMessages: {}, 
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    startChat(state, action) {
      const { chatId, userInfo } = action.payload;
      state.activeChat = { chatId, userInfo };
      if (!state.chatMessages[chatId]) {
        state.chatMessages[chatId] = [];
      }
    },
    addMessage(state, action) {
      const { chatId, message } = action.payload;
      if (state.chatMessages[chatId]) {
        state.chatMessages[chatId].push(message);
      } else {
        state.chatMessages[chatId] = [message];
      }
    },
    endChat(state) {
      state.activeChat = null;
    },
    clearChatMessages(state, action) {
      const chatId = action.payload;
      if (chatId) {
        delete state.chatMessages[chatId];
      } else {
        state.chatMessages = {};
      }
    },
  },
});

export const { startChat, addMessage, endChat, clearChatMessages } = chatSlice.actions;
export default chatSlice.reducer;
