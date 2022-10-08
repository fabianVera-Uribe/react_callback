import React, { useState } from "react";


function Box(props) {

  const [count, setCount] = useState(0)

  function click(){
    props.boxClicked(props.id)
    setCount( count + 1 )
  }
  return(
    <div onClick={() => click()} >
      <h1> Box {props.id}</h1>
      <h4>Contador: {count}</h4>
      <p>Diferencia con hermanos: {count - props.brotherCount} </p>
    </div>
  )
}

export default Box;