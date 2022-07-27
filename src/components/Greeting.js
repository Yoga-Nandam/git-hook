import React, { useState } from 'react'

function Greeting() {
  const [value, setValue]=useState(false);

const buttonHandler = () =>{
  setValue(true);
}
  
  return (
    <div>
      <h2>Hello World</h2>
      {!value && <p>Good to see you</p>}
      {value && <p>Good to see you again</p>}
      <button type="submit" onClick={buttonHandler}>Change it</button>
    </div>
  )
}

export default Greeting
