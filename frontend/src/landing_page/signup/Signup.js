// import React from "react";

// function Signup() {
//   return (
//     <div style={{ padding: "50px", textAlign: "center" }}>
//       <h1>Signup Page</h1>
//       <p>This is the signup page.</p>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 later you will send this to backend
    console.log(name, email);

    // 👉 redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Signup Page</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />

        <button
          type="submit"
          style={{ padding: "10px 20px", marginTop: "10px" }}
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;