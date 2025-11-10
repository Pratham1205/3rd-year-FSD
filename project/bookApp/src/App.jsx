import { useState } from "react";
import "./App.css";
import Book from "./components/Book";
    import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <h1>Book App</h1>
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
