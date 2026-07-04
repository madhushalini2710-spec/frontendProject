import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Register Successful");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">

          <div className="card p-4 shadow">
            <h3 className="text-center mb-3">Register</h3>

            <form onSubmit={handleRegister}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn btn-success w-100">
                Register
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;