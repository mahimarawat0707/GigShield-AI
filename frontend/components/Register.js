import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/register", form);
    alert("Registered!");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
      <input placeholder="Phone" onChange={e => setForm({...form, phone:e.target.value})} />
      <input placeholder="City" onChange={e => setForm({...form, city:e.target.value})} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Register;