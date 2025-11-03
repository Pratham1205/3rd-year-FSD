import React from 'react'

const change = () => {
  function change() {
        document.write("Hello");
        
    }

  return (
    <div>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default change
