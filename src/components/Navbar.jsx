import React from "react";

function Navbar({ setIsLoggedIn }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">

      <span className="navbar-brand">Expense Tracker</span>

      <div>
        <button
          className="btn btn-outline-light me-2"
          onClick={() => setIsLoggedIn(true)}
        >
          Home
        </button>

        <button
          className="btn btn-warning"
          onClick={() => setIsLoggedIn(false)}
        >
          Login
        </button>
      </div>

    </nav>
  );
}

export default Navbar;