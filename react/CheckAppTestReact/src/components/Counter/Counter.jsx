import React from 'react';
import { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <p>count is {count}</p>
      <button onClick={() => setCount(count +1)}>
        Increment
      </button>
      <button onClick={() => setCount(count -1)}>
        Decrement
      </button>
    </div>
  )
}

export default Counter