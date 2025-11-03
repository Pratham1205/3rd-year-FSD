import { useState } from "react";
import "./App.css";
import Book from "./components/Book";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <div id="pratham">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

export default App;
