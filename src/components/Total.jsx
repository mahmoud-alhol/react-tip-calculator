import React from "react";

function Total({ bill, yourRate, friendRate }) {
  const tip = (bill * (yourRate + friendRate)) / 2 / 100;
  const total = bill + tip;
  return (
    <h3>
      Your total is: ${total} (${bill} + ${tip} tip)
    </h3>
  );
}

export default Total;
