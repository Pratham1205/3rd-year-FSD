import React from "react";
import "./App.css";
import Book from "./components/Book";
    import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <br />
              <h1>Book App</h1>
              <div id="pratham">
                <Book />
                <Book />
                <Book />
                <Book />
              </div>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add routes for /news, /contact, /about later if needed */}
      </Routes>
    </div>
  );
}

export default App;
