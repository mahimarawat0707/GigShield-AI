import axios from "axios";

function Plans() {
  const buy = async (plan) => {
    await axios.post("http://localhost:5000/buy", {
      phone: "123",
      plan
    });
    alert("Plan Activated ✅");
  };

  return (
    <div>
      <h2>Plans</h2>
      <button onClick={()=>buy("Basic")}>Basic ₹25</button>
      <button onClick={()=>buy("Standard")}>Standard ₹40</button>
      <button onClick={()=>buy("Pro")}>Pro ₹60</button>
    </div>
  );
}

export default Plans;