import React from "react";
import Register from "./components/Register";
import Plans from "./components/Plans";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>GigShield AI 🚀</h1>
      <Register />
      <Plans />
      <Dashboard />
    </div>
  );
}

export default App;