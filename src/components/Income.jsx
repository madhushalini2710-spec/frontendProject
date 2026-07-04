import React from "react";

function Income() {
  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="text-success">💰 Total Income</h2>
        <hr />
        <h3>₹50,000</h3>

        <p className="mt-3">
          This page displays your total monthly income.
        </p>

        <button
          className="btn btn-primary"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Income;