import React, { useState } from "react";
import Bill from "./Bill";
import Rate from "./Rate";
import Reset from "./Reset";
import Total from "./Total";

function App() {
  const [bill, setBill] = useState("");
  const [yourRate, setYourRate] = useState(0);
  const [friendRate, setFriendRate] = useState(0);

  function handleReset() {
    setBill("");
    setYourRate(0);
    setFriendRate(0);
  }
  return (
    <div>
      <Bill bill={bill} onBill={setBill} />
      <Rate rate={yourRate} onRate={setYourRate}>
        <span>How much did you like the service?</span>
      </Rate>
      <Rate rate={friendRate} onRate={setFriendRate}>
        <span>How much did your friend like the service?</span>
      </Rate>
      <Total bill={bill} yourRate={yourRate} friendRate={friendRate} />
      <Reset onReset={handleReset} />
    </div>
  );
}

export default App;
