import axios from "axios";

function Plans() {
  const buyPlan = async (plan) => {
    await axios.post("http://localhost:5000/buy", {
      phone: "123",
      plan
    });
    alert("Plan Activated");
  };

  return (
    <div>
      <h2>Plans</h2>
      <button onClick={() => buyPlan("Basic")}>Basic ₹25</button>
      <button onClick={() => buyPlan("Standard")}>Standard ₹40</button>
      <button onClick={() => buyPlan("Pro")}>Pro ₹60</button>
    </div>
  );
}

export default Plans;