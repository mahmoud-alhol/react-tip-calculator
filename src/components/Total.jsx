import React from "react";

function Total({ bill, yourRate, friendRate }) {
  const yourTip = yourRate * 5;
  const friendTip = friendRate * 5;
  const tipRate = (yourTip + friendTip) / 2;
  const tip = (bill * tipRate) / 100;
  const total = bill + tip;
  return (
    <div>
      Your total is: ${total} (${bill} + ${tip} tip)
    </div>
  );
}

export default Total;
