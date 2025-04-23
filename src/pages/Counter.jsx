import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="page">
      <h1>Counter Page</h1>
      <div className="counter-container">
        <p className="counter-value">{count}</p>
        <div className="counter-buttons">
          <button onClick={() => setCount(count - 1)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
      </div>
    </div>
  )
}

export default Counter