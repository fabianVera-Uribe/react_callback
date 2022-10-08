import React, { useState } from "react"
import Box from "./box/box"
import './App.css';

function App() {
  // Contador Padre
  const[count, setCount] = useState(0)
  
  // Contadores hermanos
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  let boxClicked = (brother) => {
    setCount( count + 1 )

    if(brother === 1) {
      setCount1( count1 + 1)
    } else if(brother === 2) {
      setCount2( count2 + 1)
    } else {
      setCount3( count3 + 1)
    }
  }

  return (
    <div className="App">
      <section className="App-header">
        <Box id={1} boxClicked={boxClicked} brotherCount={count2 + count3} />
        <Box id={2} boxClicked={boxClicked} brotherCount={count1 + count3} />
        <Box id={3} boxClicked={boxClicked} brotherCount={count1 + count2} />

        <p>Contador Total: {count}</p>
      </section>
    </div>
  );
}

export default App;
