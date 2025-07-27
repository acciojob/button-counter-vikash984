
import React from "react";
import './../styles/App.css';
import React, { useState } from 'react';

const ButtonCounter = () => {
  const [count, setCount] = useState(0); 

  const handleClick = () => {
    setCount(count + 1);
  };

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <p>Button clicked {count} {count === 1 ? 'time' : 'times'}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App
