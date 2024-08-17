import React from "react";

function Reset({ onBill, onYourRate, onFriendRate }) {
  function handleClick() {
    onBill(0);
    onYourRate(0);
    onFriendRate(0);
  }
  return <button onClick={handleClick}>Reset</button>;
}

export default Reset;
