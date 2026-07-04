import React, { useState } from "react";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      setIsLoggedIn(true); // 👉 Home page open
    } else {
      alert("Enter email & password");
    }
  };

  return (

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">

          <div className="card p-4 shadow">
            <h3 className="text-center">Login</h3>

            <form onSubmit={handleLogin}>
              <input
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

              <button className="btn btn-primary w-100">
                Login
              </button>
            </form>
           
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;