import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>React on Rails</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
