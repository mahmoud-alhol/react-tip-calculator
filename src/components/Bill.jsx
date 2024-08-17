import React from "react";

function Bill({ bill, onBill }) {
  return (
    <div>
      <span>How much was the bill? $</span>
      <input type="text" value={bill} onChange={(e) => onBill(Number(e.target.value))} />
    </div>
  );
}

export default Bill;
