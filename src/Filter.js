import React, { useState } from "react";

function Filter({ onFilterChange }) {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onFilterChange({ title: event.target.value, rate });
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
    onFilterChange({ title, rate: event.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <select value={rate} onChange={handleRateChange}>
        <option value="">Filter by rate</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
    </div>
  );
}

export default Filter;
    