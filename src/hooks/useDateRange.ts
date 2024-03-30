import { useState } from "react";

export const useDateRange = (initialStartDate: string = '', initialEndDate: string = '') => {
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
  }

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
  }

  return { startDate, endDate, handleStartDateChange, handleEndDateChange };
};