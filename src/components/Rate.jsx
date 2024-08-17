import React from "react";

function Rate({rate, onRate,children}) {
  return (
    <div>
      <span>{children}</span>
      <select value={rate} onChange={(e) => onRate(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="1">It was ok (5%)</option>
        <option value="2">It was good (10%)</option>
        <option value="3">Absolutely amazing (15%)</option>
      </select>
    </div>
  );
}

export default Rate;
