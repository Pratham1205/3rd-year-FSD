import React from 'react'

const counter = () => {
    let count = 0;
    function Changecount() {
        count ++;
        document.getElementById("counter").innerHTML = `Count: ${count}`;
    }
  return (
    <div>
      <p id='counter'> Count: 0</p>
      <button onClick={Changecount}>Click</button>
    </div>
  )
}

export default counter
