import React from "react";

function Dashboard({ income, expense, balance, savings }) {
  return (
    <div className="row text-center mb-4">

      <div className="col-md-3">
        <div className="card bg-primary text-white p-3">
          <h5>Total Income</h5>
          <h3>₹{income}</h3>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card bg-danger text-white p-3">
          <h5>Total Expense</h5>
          <h3>₹{expense}</h3>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card bg-info text-white p-3">
          <h5>Balance</h5>
          <h3>₹{balance}</h3>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card bg-warning text-dark p-3">
          <h5>Savings</h5>
          <h3>₹{savings}</h3>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;