import axios from "axios";
import { useState } from "react";

function Dashboard() {
  const [premium, setPremium] = useState("");
  const [claim, setClaim] = useState("");

  const getPremium = async () => {
    const res = await axios.post("http://localhost:5000/premium", {
      rain: 60,
      aqi: 350
    });
    setPremium(res.data.premium);
  };

  const getClaim = async () => {
    const res = await axios.post("http://localhost:5000/premium", {
      city: "Delhi"
    });
    setClaim(res.data.status + " ₹" + (res.data.amount || 0));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={getPremium}>Check Premium</button>
      <p>{premium}</p>

      <button onClick={getClaim}>Trigger Claim</button>
      <p>{claim}</p>
    </div>
  );
}

export default Dashboard;