import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/register", form);
    alert("Registered Successfully ✅");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} /><br/>
      <input placeholder="Phone" onChange={e => setForm({...form, phone:e.target.value})} /><br/>
      <input placeholder="City" onChange={e => setForm({...form, city:e.target.value})} /><br/>
      <input placeholder="Platform" onChange={e => setForm({...form, platform:e.target.value})} /><br/>
      <input placeholder="Income" onChange={e => setForm({...form, income:e.target.value})} /><br/>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;