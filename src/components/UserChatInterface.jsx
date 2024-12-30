"use client";

import React, { useState } from "react";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";

export default function UserChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        content: inputValue,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="w-full h-[480px]  bg-gray-50 border border-gray-300 rounded-lg shadow-md flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-purple-700 text-white rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src="/profile.jpg"
            alt="Astrologer DP"
            className="w-12 h-12 rounded-full border border-white"
          />
          <div>
            <h3 className="text-lg font-bold">Astrologer Name</h3>
            <p className="text-sm text-gray-200">Available</p>
          </div>
        </div>
        <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-sm font-semibold">
          End Chat
        </button>
      </div>

      {/* Chat Box */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } mb-3`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg text-sm ${
                msg.sender === "user"
                  ? "bg-purple-700 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <span>{msg.content}</span>
              <span className="text-[10px] text-gray-300 block mt-1">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex items-center p-3 bg-gray-100 border-t">
        <button className="text-gray-500 hover:text-gray-700">
          <FaPaperclip size={20} />
        </button>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleInputKeyPress}
          className="flex-1 mx-3 p-2 border rounded-lg outline-none text-gray-700"
        />
        <button
          onClick={handleSendMessage}
          className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
        >
          <FaPaperPlane size={16} />
        </button>
      </div>
    </div>
  );
}
