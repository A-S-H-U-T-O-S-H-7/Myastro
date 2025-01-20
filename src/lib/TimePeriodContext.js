"use client"
import React, { createContext, useContext, useState } from "react";

const TimePeriodContext = createContext();

export const useTimePeriod = () => useContext(TimePeriodContext);

export const TimePeriodProvider = ({ children }) => {
  const [timePeriod, setTimePeriod] = useState("daily");

  return (
    <TimePeriodContext.Provider value={{ timePeriod, setTimePeriod }}>
      {children}
    </TimePeriodContext.Provider>
  );
};
