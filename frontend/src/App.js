import React from "react";
import "./App.css";
import Register from "./components/Register";
import Plans from "./components/Plans";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container">
      <h1>GigShield AI</h1>

      <div className="card register">
        <Register />
      </div>

      <div className="card plans">
        <Plans />
      </div>

      <div className="card dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;