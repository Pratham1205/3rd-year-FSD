import React from "react";
import Card from "./components/card";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/navbar';
const App = () => {
  return (
    <div>
      <Nav/>
      <br />
      <Card name = "Pratham" age={18} />
      <br />
      <Card name = "Nishkarsh" age={16} />
      <br />
      <Card name = "Hasnain" age={20} />
    </div>
  );
};

export default App;
