import React from "react";

function Rate({rate, onRate,children}) {
  return (
    <div>
      <label>{children}</label>
      <select value={rate} onChange={(e) => onRate(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

export default Rate;
