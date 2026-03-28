import React from "react";
import Register from "./components/Register";
import Plans from "./components/Plans";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <h1>GigShield AI</h1>
      <Register />
      <Plans />
      <Dashboard />
    </div>
  );
}

export default App;