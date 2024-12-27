"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaPaperclip,
  FaSearch,
  FaSmile,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

const ChatInterface = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Ashu", lastMessage: "Hi, how are you?", avatar: "/Leo.jpg" },
    { id: 2, name: "Malay", lastMessage: "Let's catch up later!", avatar: "/Pisces.jpg" },
    
  ]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "user", timestamp: "10:00 AM" },
    { id: 2, text: "Hi there!", sender: "recipient", timestamp: "10:01 AM" },
  ]);
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to the last message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );
    setFilteredContacts(filtered);
  };

  const sendMessage = () => {
    if (input.trim() !== "") {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: input, sender: "user", timestamp },
      ]);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="flex flex-col rounded-md ml-[100px] md:ml-[120px] mr-[15px] my-[10px] h-[480px] bg-[#0e1726] text-[#888ea8]">
      <div className="flex h-full rounded-md overflow-hidden">
        {/* Sidebar */}
        <div
          className={`${
            activeChat ? "hidden sm:flex" : "flex"
          } flex-col w-full sm:w-1/3 md:w-1/4 border-r bg-[#1e2737]`}
        >
          {/* Search */}
          <div className="p-4 border-b dark:border-[#2d3747]">
            <div className="relative">
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#888ea8]" />
              <input
                type="text"
                placeholder="Search by name or number"
                className="w-full py-2 pl-10 pr-4 rounded-lg bg-[#0e1726] border border-[#2d3747] focus:outline-none"
                onChange={handleSearch}
              />
            </div>
          </div>

          {/* Contacts */}
          <div className="flex-1 overflow-y-auto">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center gap-4 px-4 py-3 hover:bg-purple-100 dark:hover:bg-[#2d3747] cursor-pointer"
                onClick={() => setActiveChat(contact)}
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{contact.name}</h4>
                  <p className="text-sm text-gray-500">{contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Box */}
        <div
          className={`${
            activeChat ? "flex" : "hidden sm:flex"
          } flex-col w-full sm:w-2/3 md:w-3/4`}
        >
          {/* Header */}
          <header className="flex items-center justify-between px-6 py-4 bg-[#2d3747] text-white shadow-md">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveChat(null)}
                className="sm:hidden text-2xl text-white"
              >
                <FaArrowLeft />
              </button>
              <img
                src={activeChat?.avatar}
                alt={activeChat?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <h3 className="font-bold">{activeChat?.name}</h3>
            </div>
          </header>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-6 space-y-4"
            style={{
              backgroundImage: "url('/chatbg-light1.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`relative max-w-[350px] flex flex-col ${
                    msg.sender === "user"
                      ? "bg-purple-500 text-white"
                      : "bg-gray-300 dark:bg-[#2d3747] text-black dark:text-[#888ea8]"
                  } px-4 py-2 rounded-lg shadow-md`}
                >
                  <span className="break-words">{msg.text}</span>
                  <span className="ml-auto text-xs pt-1 text-gray-400 dark:text-[#888ea8]">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Input Section */}
          <footer className="flex items-center gap-3 px-4 py-3 bg-[#1e2737] sm:px-6">
            <FaPaperclip
              className="text-xl text-purple-500 dark:text-[#22c7d5] cursor-pointer"
            />
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={(e) => console.log("File Selected:", e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 py-2 px-4 rounded-lg border border-gray-300 dark:border-[#2d3747] focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-purple-500 dark:bg-[#22c7d5] text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 dark:hover:bg-[#1e2737]"
            >
              <FaPaperPlane />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
