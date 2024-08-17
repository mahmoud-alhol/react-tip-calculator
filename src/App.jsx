import React, { useState } from 'react'
import Bill from './Bill'
import Rate from './Rate'
import Reset from './Reset'
import Total from './Total'

function App() {
  const [bill,setBill]= useState(0)
  const [yourRate,setYourRate]= useState(0)
  const [friendRate,setFriendRate]= useState(0)
  return (
    <div>
      <Bill bill={bill} onBill={setBill}/>
      <Rate rate={yourRate} onRate={setYourRate}/>
      <Rate rate={friendRate} onRate={setFriendRate}/>
      <Total bill={bill} yourRate={yourRate} friendRate={friendRate}/>
      <Reset onBill={setBill} onYourRate={setYourRate} onFriendRate={setFriendRate}/>
    </div>
  )
}

export default App