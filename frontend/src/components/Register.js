import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({});

  const submit = async () => {
    try {
      await axios.post("http://localhost:5000/register", form);
      alert("Registered ✅");
    } catch (err) {
      console.log(err);
      alert("Error registering ❌");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Phone" onChange={e=>setForm({...form,phone:e.target.value})}/>
      <input placeholder="City" onChange={e=>setForm({...form,city:e.target.value})}/>
      <input placeholder="Platform" onChange={e=>setForm({...form,platform:e.target.value})}/>
      <input placeholder="Income" onChange={e=>setForm({...form,income:e.target.value})}/>
      <button onClick={submit}>Register</button>
    </div>
  );
}

export default Register;