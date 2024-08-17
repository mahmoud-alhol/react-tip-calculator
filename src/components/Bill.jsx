import React from "react";

function Bill({ bill, onBill }) {
  return (
    <div>
      <label>How much was the bill? $</label>
      <input type="text" value={bill} onChange={(e) => onBill(Number(e.target.value))} />
    </div>
  );
}

export default Bill;
