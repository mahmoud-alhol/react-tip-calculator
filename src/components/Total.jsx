import React from "react";

function Total({ bill, yourRate, friendRate }) {
  const tip = (bill * (yourRate + friendRate)) / 2 / 100;
  const total = bill + tip;
  return (
    <div>
      Your total is: ${total} (${bill} + ${tip} tip)
    </div>
  );
}

export default Total;
