import React from 'react'
import './Book.css'
import { useState } from 'react'
const Book = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  return (
    <div id='book'>
        <img src="https://booksandyou.in/cdn/shop/files/TheMathBook_1.webp?v=1732795361" alt="" />
        <h1>Title: Mathematics</h1>
        <h1>Price: 200</h1>
        <div>
          <button onClick={handleAdd}>Add</button>
          <span>{count}</span>
          <button onClick={handleRemove}>Remove</button>
        </div>
    </div>
  )
}

export default Book
